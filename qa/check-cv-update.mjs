import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
const browser=await chromium.launch({executablePath:process.env.BROWSER_EXECUTABLE});
const base=process.env.PORTFOLIO_URL||'http://127.0.0.1:8081';
const reports=[];
await mkdir('qa/screenshots/cv',{recursive:true});
try{
 for(const width of [320,390,768,1440]){
  const p=await browser.newPage({viewport:{width,height:900}});const errors=[];
  p.on('pageerror',e=>errors.push(e.message));
  await p.goto(base);await p.waitForLoadState('networkidle');
  assert.equal(await p.locator('.featured-work .work-card').count(),3);
  assert.equal(await p.locator('.featured-work').getByText('My role: thesis adviser',{exact:true}).count(),2);
  assert.equal(await p.locator('.background-details').evaluate(e=>e.open),false);
  const papers=p.locator('details').filter({has:p.locator('summary').filter({hasText:'Research publications'})}).first();
  assert.equal(await papers.evaluate(e=>e.open),false);
  await p.locator('summary').filter({hasText:'My education, experience, and academic service'}).focus();await p.keyboard.press('Enter');
  await p.getByRole('heading',{name:'Research internship',exact:true}).waitFor();
  await p.getByRole('heading',{name:'Associate Editor',exact:true}).waitFor();
  await p.getByText('September 19, 2026 – September 19, 2028',{exact:true}).waitFor();
  assert.equal(await p.locator('.academic-review-lists section').nth(0).locator('li').count(),5);
  assert.equal(await p.locator('.academic-review-lists section').nth(1).locator('li').count(),7);
  await p.locator('summary').filter({hasText:'Research publications'}).focus();await p.keyboard.press('Enter');
  assert.equal(await p.locator('.publication-list section article').count(),6);
  await p.getByRole('link',{name:'AI-based disease detection for cacao black pod rot (p. palmivora): a scoping review',exact:true}).waitFor();
  assert.equal(await p.locator('.conference-papers').evaluate(e=>e.open),false);
  await p.locator('.conference-papers summary').focus();await p.keyboard.press('Enter');
  assert.equal(await p.locator('.conference-papers article').count(),13);
  assert.equal(await p.locator('.conference-papers .paper-status').filter({hasText:'Accepted'}).count(),2);
  assert.equal(await p.locator('.conference-papers .paper-status').filter({hasText:'Conference paper'}).count(),11);
  assert.equal(await p.locator('.conference-papers a').count(),0);
  assert.equal(await p.locator('.publication-list section a[href^="https://doi.org/"]').count(),6);
  const text=await p.locator('body').innerText();
  assert(!text.includes('955 598 9015'));assert(!text.includes('1.392857'));assert(text.includes('English, Filipino, or Cebuano'));
  assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
  await p.screenshot({path:`qa/screenshots/cv/${width}-expanded.png`,fullPage:true});
  assert.deepEqual(errors,[]);reports.push({width,status:'passed',papers:19,published:6,accepted:2,otherConferenceEntries:11});await p.close();
 }
 await writeFile('qa/cv-results.json',JSON.stringify(reports,null,2));console.log(JSON.stringify(reports));
}finally{await browser.close();}
