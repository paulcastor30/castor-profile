import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import {readFile,writeFile} from 'node:fs/promises';
const base=process.env.PORTFOLIO_URL||'http://127.0.0.1:8081';
const browser=await chromium.launch({executablePath:process.env.BROWSER_EXECUTABLE});
const reports=[];
try{const page=await browser.newPage();await page.goto(base+'/lab/research');
const search=page.getByLabel('Search by topic or researcher name',{exact:true});
for(const [q,count,slug] of [['larita',2,'rice-tungro'],['canete',1,'bell-pepper-aphid-damage'],['landslide',1,'geosentry-landslide-warning'],['unknown-topic-xyz',0,null]]){
 await search.fill(q);assert.equal(await page.locator('.research-card').count(),count);assert.equal(await page.evaluate(()=>document.activeElement.id),'research-search');
 if(slug)assert(await page.locator(`a[href="/lab/research/${slug}"]`).count());
 await page.reload();assert.equal(await search.inputValue(),q);assert.equal(await page.locator('.research-card').count(),count);
}
await page.getByRole('heading',{name:'No groups match these filters'}).waitFor();await page.getByRole('button',{name:'Show all research'}).click();assert.equal(await search.inputValue(),'');assert.equal(await page.locator('.research-card').count(),26);
await search.fill('larita');await page.getByLabel('Program',{exact:true}).selectOption('MS');await page.getByLabel('Status / graduation class',{exact:true}).selectOption('current');assert.equal(await page.locator('.research-card').count(),1);await page.reload();assert.equal(await page.locator('.research-card').count(),1);
await page.getByRole('button',{name:'Show all research'}).click();await page.getByRole('navigation',{name:'Jump to a research section'}).getByRole('link',{name:'Graduates · Class of 2025 · BSCA',exact:true}).click();const heading=page.getByRole('heading',{name:'Graduates · Class of 2025 · BSCA',exact:true});assert.equal(await heading.evaluate(e=>e===document.activeElement),true);assert((await heading.boundingBox()).y>=(await page.locator('header').boundingBox()).height-1);
await page.goto(base+'/lab/research/geosentry-landslide-warning');await page.getByRole('link',{name:'View or copy lab email addresses'}).click();await page.getByRole('heading',{name:'Contact the laboratory',exact:true}).waitFor();assert.equal(await page.locator('.lab-contact-card input').count(),2);
await page.goto(base);assert.equal(await page.locator('main img').count(),0);assert.equal(await page.getByRole('heading',{name:'Our research laboratory',exact:true}).count(),1);
reports.push({check:'accent-insensitive topic/name search, preserved typing focus, combined program/class filters, URL reload, empty results recovery, section focus/header clearance, project contact fallback, no personal portrait and preserved lab introduction',status:'passed'});
const axe=await readFile(process.env.AXE_SOURCE_PATH,'utf8');
for(const [width,height,large] of [[1440,900,false],[390,900,false],[320,256,false],[1280,900,true]]){
 await page.setViewportSize({width,height});await page.goto(base+'/lab/research');if(large)await page.addStyleTag({content:'html {font-size:200% !important}'});await page.addScriptTag({content:axe});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));const audit=await page.evaluate(()=>axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']}}));assert.equal(audit.violations.length,0);await page.screenshot({path:`qa/screenshots/research-search-${width}.png`});reports.push({width,large,violations:audit.violations.map(v=>v.id)});
}await writeFile('qa/research-search-results.json',JSON.stringify(reports,null,2));console.log('Research search, filter/jump/contact journeys and four accessibility layouts passed.');}finally{await browser.close();}
