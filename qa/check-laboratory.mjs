import { chromium } from '@playwright/test';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
const base = process.env.PORTFOLIO_URL || 'http://127.0.0.1:8081';
const browser = await chromium.launch({ executablePath: process.env.BROWSER_EXECUTABLE || undefined });
const axe = await readFile(process.env.AXE_SOURCE_PATH, 'utf8');
const reports = [];
await mkdir('qa/screenshots/lab', {recursive:true});
try {
 const context = await browser.newContext({permissions:['clipboard-read','clipboard-write']});
 const page = await context.newPage();
 const visit = async url => { await page.goto(url); await page.waitForLoadState("networkidle"); };
 const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('console',e=>{if(e.type()==='error')errors.push(e.text());});
 await visit(`${base}/lab/research`);
 await page.getByRole('status').filter({hasText:'21 thesis groups'}).waitFor();
 const links = await page.locator('.research-card h2 a').evaluateAll(es=>es.map(e=>e.getAttribute('href')));
 assert.equal(links.length,21);
 for(const [program,cohort,count] of [['MS','',5],['BS','',16],['','2026',8],['','2025',7],['','current',6],['MS','2025',0]]) {
  await page.getByLabel('Program',{exact:true}).selectOption(program);
  await page.getByLabel('Status / graduation class',{exact:true}).selectOption(cohort);
  assert.equal(await page.locator('.research-card').count(),count);
  await page.reload();
  assert.equal(await page.locator('.research-card').count(),count);
 }
 await page.getByRole('heading',{name:'No groups match these filters'}).waitFor();
 await page.getByRole('button',{name:'Show all research'}).click();
 assert.equal(await page.locator('.research-card').count(),21);
 let researchers=0,outputs=0;
 for(const link of links) {
  await visit(base+link);
  assert.equal(await page.locator('h1').count(),1);
  await page.getByRole('heading',{name:'Official thesis title'}).waitFor();
  researchers+=await page.locator('.researcher-card').count();
  outputs+=await page.locator('.output-status').count();
  for(const text of await page.locator('.output-status').allTextContents()) assert(['Accepted · 2026', 'Published · 2026', 'Conference paper · 2026'].includes(text));
  if(link.endsWith('cacao-disease')) assert.equal(await page.locator('.research-outputs a').getAttribute('href'),'https://doi.org/10.1016/j.procs.2026.07.102'); else assert.equal(await page.locator('.research-outputs a').count(),0);
  assert.equal(await page.locator('.portrait-placeholder:not([aria-hidden="true"])').count(),0);
  const response = await page.request.get(base+link);
  assert.equal(response.status(),200);
  const html=await response.text();
  assert(html.includes('Official thesis title'),'Missing initial HTML content');
  assert(html.includes(`href="https://paulrodolfcastor.vercel.app${link}"`),'Wrong canonical');
 }
 assert.equal(researchers,53); assert.equal(outputs,10);
 await visit(`${base}/lab/people`);
 assert.equal(await page.locator('.person-entry').count(),52);
 assert.equal(await page.locator('.people-portraits').count(),0);
 assert.equal(await page.locator('.lab-head img').count(),2);
 const mail = await page.locator('a[href^="mailto:"]').evaluateAll(es=>es.map(e=>e.getAttribute('href')));
 assert(mail.every(h=>h.includes('paulrodolf.castor@')||h.includes('applerose.alce@')));
 await page.getByRole('navigation').getByRole('link',{name:'Contact',exact:true}).click();
 await page.waitForFunction(()=>document.activeElement.id==='main-content');
 assert.equal(await page.evaluate(()=>document.activeElement.id),'main-content');
 for(const [index,email] of [[0,'paulrodolf.castor@g.msuiit.edu.ph'],[1,'applerose.alce@g.msuiit.edu.ph']]) {
  const card=page.locator('.lab-contact-card').nth(index);
  await card.getByRole('button').click();
  await card.getByRole('status').filter({hasText:'copied.'}).waitFor();
  assert.equal(await page.evaluate(()=>navigator.clipboard.readText()),email);
 }
 await page.evaluate(()=>Object.defineProperty(navigator.clipboard,'writeText',{configurable:true,value:()=>Promise.reject(new Error('denied'))}));
 for(const index of [0,1]) {
  const card=page.locator('.lab-contact-card').nth(index);
  await card.getByRole('button').click();
  await card.getByRole('status').filter({hasText:'is selected'}).waitFor();
  assert.equal(await page.evaluate(()=>document.activeElement.id),`lab-email-${index}`);
  assert.equal(await card.locator('input').evaluate(e=>e.selectionEnd-e.selectionStart), (await card.locator('input').inputValue()).length);
 }
 await visit(`${base}/lab`); await page.keyboard.press('Tab'); await page.keyboard.press('Enter');
 await page.waitForFunction(()=>document.activeElement.id==='main-content');
 assert.equal(await page.evaluate(()=>document.activeElement.id),'main-content');
 await visit(`${base}/lab`); await page.keyboard.press('Tab'); await page.keyboard.press('Tab'); await page.keyboard.press('Enter');
 await page.getByRole('heading',{name:'Contact the laboratory'}).waitFor();
 await page.getByRole('link',{name:'Paul Castor’s personal portfolio',exact:true}).click();
 await page.getByRole('heading',{name:'Hi, I’m Paul'}).waitFor();
 assert.deepEqual(errors,[]);
 reports.push({journeys:'21 group URLs; 53 group memberships; 10 outputs with separate published, accepted, and conference-paper labels; filters, shared URLs, contact copying and fallback, skip links, route focus, portfolio return',status:'passed'});
 await context.close();
 const routes=['/lab','/lab/research','/lab/people',links.find(l=>l.includes('goat')), '/lab/contact'];
 for(const scenario of [{name:'phone',width:390,height:900},{name:'desktop',width:1440,height:900},{name:'large-text',width:1280,height:900,textScale:2},{name:'reflow',width:320,height:256},{name:'forced-colors',width:390,height:900,forcedColors:'active'}]) {
  const ctx=await browser.newContext({viewport:{width:scenario.width,height:scenario.height},forcedColors:scenario.forcedColors||'none',reducedMotion:'reduce'});
  const p=await ctx.newPage();
  for(const route of routes) {
   await p.goto(base+route); await p.waitForLoadState("networkidle");
   if(scenario.textScale)await p.addStyleTag({content:'html {font-size:200% !important}'});
   assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`Overflow: ${scenario.name} ${route}`);
   await p.addScriptTag({content:axe});
   const audit=await p.evaluate(()=>axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']}}));
   const violations=audit.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}));
   const targets=await p.locator('.navigation a,.primary-action,.text-action,.text-link,select,input,.site-footer a,.research-card h2 a').evaluateAll(es=>es.filter(e=>e.getClientRects().length).map(e=>({text:e.textContent,width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height})));
   assert(targets.every(t=>t.width>=44&&t.height>=44),`Small targets ${JSON.stringify(targets.filter(t=>t.width<44||t.height<44))}`);
   const name=route.split('/').filter(Boolean).join('-');
   await p.screenshot({path:`qa/screenshots/lab/${scenario.name}-${name}.png`,fullPage:true});
   reports.push({scenario:scenario.name,route,violations,manualReview:audit.incomplete.map(v=>v.id)});
  }
  await ctx.close();
 }
 await writeFile('qa/lab-results.json',JSON.stringify(reports,null,2));
 assert(reports.every(r=>!r.violations||r.violations.length===0),'Accessibility violations found');
 console.log('Laboratory journeys and 25 accessibility/layout scenarios passed.');
} finally {await browser.close();}
