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
 assert.equal(await p.locator('.person-entry').count(),52);assert.equal(await p.locator('details').count(),0);
 assert((await p.locator('.people-category h2').allTextContents()).includes('Current researchers · MSCA'));
 const search=p.getByLabel('Search people by name or research topic');
 for(const [q,count,slug] of [['larita',1,'rice-tungro'],['castillo',1,'smart-goat-profiling'],['canete',1,'bell-pepper-aphid-damage'],['nonexistent-person',0,null]]){
 await search.fill(q);assert.equal(await p.locator('.person-entry').count(),count);
 assert.equal(await p.evaluate(()=>document.activeElement.id),'people-search');
 if(slug)assert((await p.locator('.person-membership').evaluateAll(es=>es.map(e=>e.dataset.group))).includes(slug));
 if(q==='larita'){assert.equal(await p.locator('.person-membership').count(),2);assert((await p.locator('.person-entry').innerText()).includes('BSCA — Graduated, Class of 2025'));}
 await p.reload();assert.equal(await search.inputValue(),q);assert.equal(await p.locator('.person-entry').count(),count);
 }
 for(const [program,cohort,count] of [['MS','',5],['BS','',48],['','2026',16],['','2025',21],['','current',16],['MS','2025',0],['MS','current',1],['BS','current',15]]){
 await p.getByRole('button',{name:'Clear filters'}).click();await p.getByLabel('Program',{exact:true}).selectOption(program);await p.getByLabel('Status / graduation class',{exact:true}).selectOption(cohort);
 assert((await p.getByRole('status').innerText()).startsWith(`${count} researchers`) || (count===1&&(await p.getByRole('status').innerText()).startsWith('1 researcher')));
 await p.reload();assert.equal(await p.locator('.person-entry').count(),count);
 }
 await p.getByRole('button',{name:'Clear filters'}).click();const names=new Set();let memberships=0;const ordering=[];
 const entries=await p.locator('.person-entry').evaluateAll(es=>es.map(e=>({name:e.dataset.person,category:e.closest('.people-category').getAttribute('aria-label')})));
 entries.forEach(e=>{assert(!names.has(e.name));names.add(e.name);ordering.push(e);});memberships=await p.locator('.person-membership').count();
 assert.equal(await p.locator('.people-pagination').count(),0);
 await p.goto(base+'/lab/people?page=2');await p.waitForLoadState('networkidle');assert.equal(await p.locator('.person-entry').count(),52);
 assert.equal(memberships,53);assert.equal(names.size,52);
 const categories=[...new Set(ordering.map(e=>e.category))];assert.deepEqual(categories,['Current researchers · MSCA','Current researchers · BSCA','Graduates · Class of 2026 · MSCA','Graduates · Class of 2026 · BSCA','Graduates · Class of 2025 · BSCA']);
 const surname=n=>n.replace(/\s+(Jr\.|III)$/i,'').trim().split(/\s+/).at(-1);
 for(const category of categories){const actual=ordering.filter(e=>e.category===category).map(e=>e.name);assert.deepEqual(actual,[...actual].sort((a,b)=>surname(a).localeCompare(surname(b),'en',{sensitivity:'base'})||a.localeCompare(b)));}
 await p.goto(base+'/lab/people?q=larita&program=BS&group=2025');await p.waitForLoadState('networkidle');assert.equal(await p.locator('.person-entry').count(),1);assert.equal(await p.locator('.person-membership').count(),1);assert((await p.locator('.person-membership').innerText()).includes('Automated feed mixing and dispensing'));
 await p.locator('.person-membership a').click();await p.waitForLoadState('networkidle');assert(p.url().endsWith('/lab/research/smart-swine-feeding'));
 await p.goto(base+'/lab/people');await p.waitForLoadState('networkidle');
 const jumps=p.getByRole('navigation',{name:'Jump to a people section'}).getByRole('link');assert.equal(await jumps.count(),5);
 for(let i=0;i<5;i++){const href=await jumps.nth(i).getAttribute('href');await jumps.nth(i).click();const id=href.split('#')[1];await p.waitForFunction(id=>document.activeElement.id===id,id);assert((await p.locator('#'+id).innerText()).length>0);}
 await p.getByRole('link',{name:'Back to researcher search'}).click();await p.waitForFunction(()=>document.activeElement.id==='people-directory-title');
 await p.getByRole('link',{name:'View and copy lab email addresses'}).click();await p.getByRole('heading',{name:'Contact the laboratory',exact:true}).waitFor();assert.equal(await p.locator('.lab-contact-card input').count(),2);
 assert.deepEqual(errors,[]);await p.close();
 for(const s of [{name:'phone',width:390,height:900},{name:'desktop',width:1440,height:900},{name:'large-text',width:1280,height:900,large:true},{name:'reflow',width:320,height:256},{name:'forced-colors',width:390,height:900,colors:'active'}]){
 const page=await b.newPage({viewport:{width:s.width,height:s.height},forcedColors:s.colors||'none'});
 for(const filtered of [false,true]){
 await page.goto(base+'/lab/people'+(filtered?'?program=MS&group=current':''));await page.waitForLoadState('networkidle');if(s.large)await page.addStyleTag({content:'html{font-size:200% !important}'});
 await page.locator('img').evaluateAll(es=>es.forEach(e=>e.loading='eager'));await page.waitForFunction(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0));
 await page.addScriptTag({content:axe});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 const audit=await page.evaluate(()=>axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']}}));
 assert.equal(audit.violations.length,0,JSON.stringify(audit.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}))));
 const small=await page.locator('.people-section-links a,.people-filters input,.people-filters select,.people-filters button,.people-pagination button,.person-membership a,.lab-head a,.project-contact a').evaluateAll(es=>es.filter(e=>e.getClientRects().length).filter(e=>{const r=e.getBoundingClientRect();return r.width<44||r.height<44}).map(e=>e.textContent));assert.deepEqual(small,[]);
 reports.push({scenario:s.name,filtered,violations:[],manualReview:audit.incomplete.map(v=>v.id)});
 if(!filtered)await page.screenshot({path:`qa/screenshots/directory/${s.name}.png`,fullPage:true});
 }
 await page.close();
 }
 await writeFile('qa/directory-results.json',JSON.stringify({journeys:'52 unique people; 53 program memberships; program/class filters; alphabetical surname ordering; current-first, newest-class-first grouping; full scrollable directory; visible portraits; research links; filter focus and URL persistence',reports},null,2));console.log('Individual directory journeys and 10 accessibility/layout scenarios passed.');
}finally{await b.close();}
