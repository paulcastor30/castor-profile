import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
const browser=await chromium.launch({executablePath:process.env.BROWSER_EXECUTABLE});
const base=process.env.PORTFOLIO_URL||'http://127.0.0.1:8081';const axe=await readFile(process.env.AXE_SOURCE_PATH,'utf8');const results=[];
const groups=[['rice-tungro',1,1,['Harreez Villaruz-Quimque','Paul Rodolf P. Castor','Apple Rose B. Alce']],['bell-pepper-aphid-damage',3,3,['Paul Rodolf P. Castor','Apple Rose B. Alce','Dr. Slamet Riyadi']],['smart-goat-profiling',3,3,['Dr. Ernesto E. Empig, DSDS','Paul Rodolf P. Castor']],['geosentry-landslide-warning',3,0,['Paul Rodolf P. Castor','Dr. Ganapathy Pattukandan Ganapathy','Dr. Slamet Riyadi']],['carbon-dioxide-adsorption',3,0,['Paul Rodolf P. Castor','Ralf Ruffel M. Abarca']]];
await mkdir('qa/screenshots/new-groups',{recursive:true});
try{
 for(const scenario of [{name:'phone',width:390,height:900},{name:'desktop',width:1440,height:900},{name:'large-text',width:1280,height:900,large:true},{name:'reflow',width:320,height:256},{name:'forced-colors',width:390,height:900,colors:'active'}]){
  const p=await browser.newPage({viewport:{width:scenario.width,height:scenario.height},forcedColors:scenario.colors||'none'});const errors=[];p.on('pageerror',e=>errors.push(e.message));
  for(const [slug,people,images,supervisors] of groups){
   await p.goto(base+'/lab/research/'+slug);await p.waitForLoadState('networkidle');await p.locator('img').evaluateAll(es=>es.forEach(e=>e.loading='eager'));await p.waitForFunction(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0));
   if(scenario.large)await p.addStyleTag({content:'html {font-size:200% !important}'});
   assert.equal(await p.locator('.researcher-card').count(),people);assert.equal(await p.locator('.researcher-card img').count(),images);
   assert.equal(await p.locator('.group-status').innerText(),'Current researchers · Ongoing project');
   for(const name of supervisors)assert((await p.locator('.supervision').innerText()).includes(name));
   assert.equal(await p.locator('.output-status').count(),({'rice-tungro':2,'bell-pepper-aphid-damage':1,'smart-goat-profiling':2})[slug]||0);
   assert((await p.locator('.project-contact a').getAttribute('href')).startsWith('mailto:paulrodolf.castor@g.msuiit.edu.ph'));
   assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
   await p.addScriptTag({content:axe});const audit=await p.evaluate(()=>axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']}}));
   results.push({scenario:scenario.name,slug,violations:audit.violations.map(v=>v.id),manualReview:audit.incomplete.map(v=>v.id)});
   if(scenario.name==='phone'||slug==='bell-pepper-aphid-damage')await p.screenshot({path:`qa/screenshots/new-groups/${scenario.name}-${slug}.png`,fullPage:true});
  }
  await p.goto(base);await p.waitForLoadState('networkidle');assert.equal(await p.locator('.personal-portrait img').count(),1);assert.deepEqual(errors,[]);await p.close();
 }
 await writeFile('qa/new-groups-results.json',JSON.stringify(results,null,2));assert(results.every(r=>r.violations.length===0));console.log('Five new groups, adviser assignments, portrait matches and 25 accessibility/layout scenarios passed.');
}finally{await browser.close();}
