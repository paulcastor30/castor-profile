import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const baseUrl = process.env.PORTFOLIO_URL || 'http://127.0.0.1:8080';
const browser = await chromium.launch({ executablePath: process.env.BROWSER_EXECUTABLE || undefined });
const results = [];
await mkdir('qa/screenshots', { recursive: true });
try {
  for (const width of [320, 390, 768, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce', permissions: ['clipboard-read', 'clipboard-write'] });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    await page.goto(baseUrl);
    await page.waitForLoadState('networkidle');
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(await page.locator('vite-error-overlay').count(), 0);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `Horizontal overflow at ${width}`);
    await page.screenshot({ path: `qa/screenshots/${width}.png`, fullPage: true });
    for (const label of ['About', 'My work', 'Contact']) {
      await page.getByRole('navigation').getByRole('link', { name: label, exact: true }).click();
      const section = label === 'About' ? 'about' : label === 'My work' ? 'projects' : 'contact';
      assert.equal(await page.evaluate(() => location.hash), `#${section}`);
      assert.equal(await page.evaluate(() => document.activeElement.id), section);
      const targetTop = await page.locator(`#${section}`).evaluate(el => el.getBoundingClientRect().top);
      const headerBottom = await page.locator('header').evaluate(el => el.getBoundingClientRect().bottom);
      assert(targetTop >= headerBottom - 2, `${label} obscured by sticky header at ${width}`);
    }
    await page.getByRole('button', { name: 'Copy email address' }).click();
    await page.getByRole('status').filter({ hasText: 'Email address copied' }).waitFor();
    assert.equal(await page.evaluate(() => navigator.clipboard.readText()), 'paulrodolf.castor@g.msuiit.edu.ph');
    await page.evaluate(() => Object.defineProperty(navigator.clipboard, 'writeText', { configurable: true, value: () => Promise.reject(new Error('Permission denied')) }));
    await page.getByRole('button', { name: 'Copy email address' }).click();
    await page.getByRole('status').filter({ hasText: 'It is selected in the email field' }).waitFor();
    assert.equal(await page.evaluate(() => document.activeElement.id), 'contact-email');
    assert.equal(await page.locator('#contact-email').evaluate(el => el.selectionEnd - el.selectionStart), 'paulrodolf.castor@g.msuiit.edu.ph'.length);
    for (const summary of ['My education, experience, and academic service', 'More engineering projects', 'Research publications']) {
      const control = page.locator('summary').filter({ hasText: summary });
      await control.focus();
      await page.keyboard.press('Enter');
      assert.equal(await control.evaluate(el => el.parentElement.open), true);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `Expanded content overflow at ${width}`);
      await page.keyboard.press('Enter');
      assert.equal(await control.evaluate(el => el.parentElement.open), false);
    }
    const links = await page.locator('a').evaluateAll(elements => elements.map(el => el.getAttribute('href')));
    assert(!links.includes('#'));
    assert(!links.some(link => /Resume|https:\/\/(orcid.org|scholar.google.com|linkedin.com)\/$/.test(link)));
    for (const href of links.filter(link => link.startsWith('#'))) assert.equal(await page.locator(href).count(), 1, `Missing anchor ${href}`);
    const projectLinks = links.filter(link => link.includes('?subject='));
    assert.equal(projectLinks.length, 4);
    const projectNames = await page.locator('.work-card a').evaluateAll(elements => elements.map(el => el.getAttribute('aria-label')));
    assert.equal(new Set(projectNames).size, 3);
    assert(projectNames.every(name => name.startsWith('Email me about this project: ')));
    assert(projectLinks.every(link => link.startsWith('mailto:paulrodolf.castor@g.msuiit.edu.ph?subject=')));
    assert.deepEqual(errors, []);
    await page.goto(baseUrl);
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Skip to content');
    await page.keyboard.press('Enter');
    assert.equal(await page.evaluate(() => document.activeElement.id), 'main-content');
    await page.goto(baseUrl);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Skip to contact');
    await page.keyboard.press('Enter');
    assert.equal(await page.evaluate(() => document.activeElement.id), 'contact');
    const image = await page.request.get(`${baseUrl}/og-image.png`);
    assert.equal(image.status(), 200);
    assert.match(image.headers()['content-type'], /image\/png/);
    results.push({ width, status: 'passed', checks: ['layout', 'navigation', 'sticky-header clearance', 'clipboard success and fallback', 'keyboard disclosures', 'skip link', 'link destinations', 'social preview', 'no browser errors'] });
    await context.close();
  }
  const page = await browser.newPage();
  await page.goto(`${baseUrl}/missing-page`);
  await page.getByRole('link', { name: 'Go to Paul’s homepage' }).click();
  await page.getByRole('heading', { name: 'Hi, I’m Paul' }).waitFor();
  results.push({ check: 'Unknown URL recovery', status: 'passed' });
  await writeFile('qa/results.json', JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
} finally { await browser.close(); }
