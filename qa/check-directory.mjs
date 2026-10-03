import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
const base=process.env.PORTFOLIO_URL||'http://127.0.0.1:8081';
const b=await chromium.launch({executablePath:process.env.BROWSER_EXECUTABLE});
const axe=await readFile(process.env.AXE_SOURCE_PATH,'utf8');const reports=[];
await mkdir('qa/screenshots/directory',{recursive:true});
try {
 const p=await b.newPage();const errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.goto(base+'/lab/people');await p.waitForLoadState('networkidle');
 assert.equal(await p.locator('.people-group').count(),6);assert.equal(await p.locator('details[open]').count(),0);
 const search=p.getByLabel('Person or research group');
 for(const [q,count,slug] of [['larita',2,'rice-tungro'],['castillo',1,'smart-goat-profiling'],['canete',1,'bell-pepper-aphid-damage'],['nonexistent-person',0,null]]){
 await search.fill(q);assert.equal(await p.locator('.people-group').count(),count);
 assert.equal(await p.evaluate(()=>document.activeElement.id),'people-search');
 if(slug)assert((await p.locator('.people-group').evaluateAll(es=>es.map(e=>e.dataset.group))).includes(slug));
 await p.reload();assert.equal(await search.inputValue(),q);assert.equal(await p.locator('.people-group').count(),count);
 }
 for(const [program,cohort,count] of [['MS','',5],['BS','',16],['','2026',8],['','2025',7],['','current',6],['MS','2025',0]]){
 await p.getByRole('button',{name:'Clear filters'}).click();await p.getByLabel('Program',{exact:true}).selectOption(program);await p.getByLabel('Researcher group',{exact:true}).selectOption(cohort);
 assert((await p.getByRole('status').innerText()).startsWith(`${count} groups`));
 }
 await p.getByRole('button',{name:'Clear filters'}).click();const groups=new Set();let memberships=0;const names=new Set();
 for(let page=1;page<=4;page++){
 const slugs=await p.locator('.people-group').evaluateAll(es=>es.map(e=>e.dataset.group));slugs.forEach(s=>groups.add(s));
 const people=await p.locator('.people-names li').allTextContents();memberships+=people.length;people.forEach(n=>names.add(n));
 if(page<4){await p.getByRole('button',{name:'Next groups'}).click();assert.equal(await p.evaluate(()=>document.activeElement.id),'people-directory-title');assert((await p.locator('.people-pagination').innerText()).includes(`Page ${page+1} of 4`));}
 }
 assert.equal(groups.size,21);assert.equal(memberships,53);assert.equal(names.size,52);
 assert(await p.getByRole('button',{name:'Next groups'}).isDisabled());await p.getByRole('button',{name:'Previous groups'}).click();await p.reload();assert((await p.locator('.people-pagination').innerText()).includes('Page 3 of 4'));
 await search.fill('larita');const summary=p.locator('.people-portraits summary').first();await summary.focus();await p.keyboard.press('Enter');assert.equal(await p.locator('details[open]').count(),1);await p.keyboard.press('Enter');assert.equal(await p.locator('details[open]').count(),0);
 for(const [slug,count] of [['rice-tungro',2],['smart-goat-profiling',2],['bell-pepper-aphid-damage',1],['smart-swine-feeding',0]]){
 await p.goto(base+'/lab/research/'+slug);await p.waitForLoadState('networkidle');assert.equal(await p.locator('.output-status').count(),count);
 if(count){assert((await p.locator('.output-status').allTextContents()).every(s=>s==='Conference paper · 2026'));assert.equal(await p.locator('.research-outputs a').count(),0);assert(!(await p.locator('.research-outputs').innerText()).includes('CNC'));}
 }
 assert.deepEqual(errors,[]);await p.close();
 for(const s of [{name:'phone',width:390,height:900},{name:'desktop',width:1440,height:900},{name:'large-text',width:1280,height:900,large:true},{name:'reflow',width:320,height:256},{name:'forced-colors',width:390,height:900,colors:'active'}]){
 const page=await b.newPage({viewport:{width:s.width,height:s.height},forcedColors:s.colors||'none'});await page.goto(base+'/lab/people');await page.waitForLoadState('networkidle');if(s.large)await page.addStyleTag({content:'html{font-size:200% !important}'});
 await page.addScriptTag({content:axe});
 for(const expanded of [false,true]){
 if(expanded)await page.locator('.people-portraits summary').evaluateAll(es=>es.forEach(e=>e.click()));
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 const audit=await page.evaluate(()=>axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']}}));
 assert.equal(audit.violations.length,0,JSON.stringify(audit.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}))));
 const small=await page.locator('.people-filters input,.people-filters select,.people-filters button,.people-pagination button,.people-group h2 a,summary').evaluateAll(es=>es.filter(e=>e.getClientRects().length).filter(e=>{const r=e.getBoundingClientRect();return r.width<44||r.height<44}).map(e=>e.textContent));assert.deepEqual(small,[]);
 reports.push({scenario:s.name,expanded,violations:[],manualReview:audit.incomplete.map(v=>v.id)});
 if(!expanded)await page.screenshot({path:`qa/screenshots/directory/${s.name}.png`,fullPage:true});
 }
 await page.close();
 }
 await writeFile('qa/directory-results.json',JSON.stringify({journeys:'Search, accent-insensitive matching, filters, URL persistence, 21 groups, 53 memberships, 52 people, page focus, native disclosures, group paper counts',reports},null,2));console.log('Directory journeys and 10 collapsed/expanded accessibility scenarios passed.');
}finally{await b.close();}
