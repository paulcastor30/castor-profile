import { chromium } from '@playwright/test';
import { createRequire } from 'node:module';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
const require = createRequire(import.meta.url);
const axeSource = await readFile(process.env.AXE_SOURCE_PATH || require.resolve('axe-core/axe.min.js'), 'utf8');
const browser = await chromium.launch({ executablePath: process.env.BROWSER_EXECUTABLE || undefined });
const reports = [];
const baseUrl = process.env.PORTFOLIO_URL || 'http://127.0.0.1:8080';
await mkdir('qa/screenshots', { recursive: true });
try {
  for (const scenario of [
    { name: 'phone', width: 390, height: 900 },
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'large-text', width: 1280, height: 900, textScale: 2 },
    { name: '400-percent-reflow', width: 320, height: 256 },
    { name: 'forced-colors', width: 390, height: 900, forcedColors: 'active' },
  ]) {
    const context = await browser.newContext({ viewport: { width: scenario.width, height: scenario.height }, reducedMotion: 'reduce', forcedColors: scenario.forcedColors || 'none' });
    const page = await context.newPage();
    await page.goto(baseUrl);
    await page.addScriptTag({ content: axeSource });
    if (scenario.textScale) await page.addStyleTag({ content: 'html { font-size: 200% !important; }' });
    assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), 'auto');
    for (const expanded of [false, true]) {
      if (expanded) await page.locator('details').evaluateAll(elements => elements.forEach(el => el.open = true));
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `${scenario.name}: horizontal overflow`);
      const report = await page.evaluate(() => axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'] } }));
      const violations = report.violations.map(issue => ({ id: issue.id, impact: issue.impact, description: issue.description, elements: issue.nodes.map(node => node.target) }));
      reports.push({ scenario: scenario.name, expanded, violations, manualReview: report.incomplete.map(issue => issue.id) });
      await page.screenshot({ path: `qa/screenshots/${scenario.name}${expanded ? '-expanded' : ''}.png`, fullPage: true });
    }
    // Every visible standalone control has a forgiving 44-by-44 CSS pixel target.
    const targets = await page.locator('.navigation a, .primary-action, .text-action, .text-link, summary, input, .site-footer a').evaluateAll(elements => elements.filter(el => el.getClientRects().length).map(el => ({ name: el.textContent || el.getAttribute('aria-label') || el.id, width: el.getBoundingClientRect().width, height: el.getBoundingClientRect().height })));
    assert(targets.every(target => target.width >= 44 && target.height >= 44), `${scenario.name}: undersized control ${JSON.stringify(targets.filter(target => target.width < 44 || target.height < 44))}`);
    if (scenario.name === 'desktop') {
      // Walk the complete expanded page using Tab, checking focus and header overlap.
      await page.evaluate(() => { document.activeElement.blur(); scrollTo(0, 0); });
      const seen = new Set();
      for (let i = 0; i < 80; i++) {
        await page.keyboard.press('Tab');
        const focused = await page.evaluate(() => {
          const el = document.activeElement;
          const rect = el.getBoundingClientRect();
          const header = document.querySelector('header').getBoundingClientRect();
          const style = getComputedStyle(el);
          return { insideHeader: Boolean(el.closest('header')), key: `${el.tagName}:${el.id}:${el.getAttribute('href')}:${el.textContent}`, top: rect.top, bottom: rect.bottom, height: rect.height, headerBottom: header.bottom, outlineWidth: parseFloat(style.outlineWidth), outlineStyle: style.outlineStyle, label: el.textContent };
        });
        if (seen.has(focused.key)) break;
        seen.add(focused.key);
        assert(focused.outlineWidth >= 2 && focused.outlineStyle !== 'none', `Invisible focus: ${focused.label}`);
        assert(focused.insideHeader || focused.top >= focused.headerBottom - 1 || focused.label.startsWith('Skip to'), `Focus hidden under header: ${focused.label}`);
      }
      assert(seen.size >= 20, 'Expanded page keyboard walk was incomplete');
      reports.push({ scenario: 'expanded keyboard walkthrough', focusedControls: seen.size, status: 'passed' });
    }
    await context.close();
  }
  await writeFile('qa/accessibility-results.json', JSON.stringify(reports, null, 2));
  console.log(JSON.stringify(reports, null, 2));
  assert(reports.every(report => !report.violations || report.violations.length === 0), 'Accessibility violations found');
} finally { await browser.close(); }
