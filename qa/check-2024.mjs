import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const b=await chromium.launch({executablePath:process.env.BROWSER_EXECUTABLE});
const axe=await readFile(process.env.AXE_SOURCE_PATH,'utf8');
try {
for(const width of [390,1440]){
const p=await b.newPage({viewport:{width,height:1000}});
await p.goto('http://127.0.0.1:8081/lab/people?q=amboang');assert.equal(await p.locator('.person-entry').count(),1);assert.equal(await p.locator('.person-membership').count(),2);
await p.getByLabel('Status / graduation class',{exact:true}).selectOption('2024');assert.equal(await p.locator('.person-membership').count(),1);assert((await p.locator('.person-membership').innerText()).includes('Coin-operated'));
for(const slug of ['coin-operated-energy-meter','outdoor-particulate-monitoring','aerosense-air-quality','floodsense-river-warning','coffee-berry-borer']){
await p.goto('http://127.0.0.1:8081/lab/research/'+slug);await p.waitForLoadState('networkidle');assert.equal(await p.locator('.researcher-card').count(),3);assert.equal(await p.locator('.researcher-card img').count(),3);
await p.locator('img').evaluateAll(es=>es.forEach(e=>e.loading='eager'));await p.waitForFunction(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0));assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await p.addScriptTag({content:axe});const a=await p.evaluate(()=>axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa','wcag22aa']}}));assert.deepEqual(a.violations.map(v=>v.id),[]);await p.screenshot({path:`/private/tmp/2024-${width}-${slug}.png`,fullPage:true});}
await p.close();}
console.log('Five Class of 2024 groups, 15 portrait placements, dual-program membership filtering, and mobile/desktop accessibility passed.');
}finally{await b.close();}
