import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
const browser = await chromium.launch({ executablePath: process.env.BROWSER_EXECUTABLE });
try {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  // The collection endpoint exists on Vercel, not the local preview server.
  await page.route('**/_vercel/insights/script.js', route => route.fulfill({ contentType: 'application/javascript', body: '' }));
  const views = () => page.evaluate(() => (window.vaq || []).filter(entry => entry[0] === 'pageview').map(entry => entry[1]));
  await page.goto('http://127.0.0.1:8081/');
  await page.waitForFunction(() => window.vaq?.some(entry => entry[0] === 'pageview'));
  assert.deepEqual(await views(), [{ route: '/', path: '/' }]);
  assert.equal(await page.locator('script[src="/_vercel/insights/script.js"]').count(), 1);
  await page.getByRole('navigation').getByRole('link', { name: 'Laboratory', exact: true }).click();
  await page.waitForFunction(() => window.vaq?.filter(entry => entry[0] === 'pageview').length === 2);
  assert.deepEqual((await views()).at(-1), { route: '/lab', path: '/lab' });
  await page.getByRole('navigation').getByRole('link', { name: 'People', exact: true }).click();
  await page.waitForFunction(() => window.vaq?.filter(entry => entry[0] === 'pageview').length === 3);
  await page.getByLabel('Search people by name or research topic').fill('amboang');
  assert.equal(await page.locator('.person-entry').count(), 1);
  await page.getByLabel('Status / graduation class', { exact: true }).selectOption('2024');
  assert.equal(await page.locator('.person-membership').count(), 1);
  assert.equal((await views()).length, 3);
  assert.deepEqual(await page.evaluate(() => {
    const callback = window.vaq.find(entry => entry[0] === 'beforeSend')[1];
    return callback({ type: 'pageview', url: location.origin + '/lab/people?q=private-name&group=2024#researchers' });
  }), { type: 'pageview', url: 'http://127.0.0.1:8081/lab/people' });
  await page.locator('.person-membership a').click();
  await page.waitForFunction(() => window.vaq?.filter(entry => entry[0] === 'pageview').length === 4);
  assert.deepEqual((await views()).at(-1), { route: '/lab/research/coin-operated-energy-meter', path: '/lab/research/coin-operated-energy-meter' });
  assert.equal(await page.locator('script[src="/_vercel/insights/script.js"]').count(), 1);
  assert.deepEqual(errors, []);
  console.log('Analytics SDK initialization, portfolio/lab navigation, single script, and search/filter privacy passed. Live collection requires Vercel enablement and deployment.');
} finally { await browser.close(); }
