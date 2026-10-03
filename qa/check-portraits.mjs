import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import {mkdir,writeFile,readdir,readFile} from 'node:fs/promises';
const base=process.env.PORTFOLIO_URL||'http://127.0.0.1:8081';
const b=await chromium.launch({executablePath:process.env.BROWSER_EXECUTABLE});
const reports=[];await mkdir('qa/screenshots/portraits',{recursive:true});
try{
 const p=await b.newPage();const errors=[];p.on('pageerror',e=>errors.push(e.message));
 let members=0, placements=0, missing=0; const photos=[]; let lluisma=false;
 for(let number=1;number<=1;number++){
 await p.goto(base+'/lab/people?page='+number);await p.waitForLoadState('networkidle');

 members+=await p.locator('.person-entry').count(); placements+=await p.locator('.person-entry img').count();missing+=await p.locator('.person-entry .portrait-placeholder:not(:has(img))').count();
 assert.equal(await p.locator('.lab-head img').count(),2);
 await p.locator('img').evaluateAll(es=>es.forEach(e=>e.loading='eager'));
 await p.waitForFunction(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0));
 photos.push(...await p.locator('img').evaluateAll(es=>es.map(e=>({src:e.getAttribute('src'),alt:e.alt,hidden:!!e.closest('[aria-hidden="true"]'),width:e.width,height:e.height}))));
 lluisma ||= await p.getByRole('heading',{name:'Ral Angelo S. Lluisma',exact:true}).isVisible();
 }
 assert.equal(members,52);assert.equal(placements,40);assert.equal(missing,12);assert(lluisma);
 assert(photos.every(i=>i.alt===''&&i.hidden&&i.width>0&&i.height>0));
 for(const src of new Set(photos.map(photo=>photo.src))){const r=await p.request.get(base+src);assert.equal(r.status(),200);assert.match(r.headers()['content-type'],/image\/webp/);assert((await r.body()).length<100000);}
 for(const route of ['/lab','/lab/contact']){await p.goto(base+route);await p.waitForLoadState('networkidle');assert.equal(await p.locator('.head-portrait img').count(),2);}
 await p.goto(base+'/lab/research/fish-vendor-ice');await p.waitForLoadState('networkidle');assert.equal(await p.locator('.researcher-card img').count(),0);assert.equal(await p.locator('.portrait-placeholder').count(),3);
 const failed=await b.newPage();await failed.route('**/images/portraits/darel-james-narvasa.webp',r=>r.abort());
 await failed.goto(base+'/lab/research/sign-language-headset');await failed.waitForLoadState('networkidle');await failed.locator('img').evaluateAll(es=>es.forEach(e=>e.loading='eager'));
 await failed.waitForFunction(()=>document.querySelectorAll('.researcher-card img').length===2);
 assert.equal(await failed.locator('.researcher-card .portrait-placeholder:not(:has(img))').count(),1);await failed.close();
 assert.deepEqual(errors,[]);
 const files=await readdir('dist/images');assert(!files.includes('researchers')&&!files.includes('lab head'));
 assert.equal((await readdir('dist/images/portraits')).length,42);
 reports.push({check:'40 unique directory researcher photos, 2 lab heads, 12 empty researcher boxes, image decoding, small WebP assets, hidden redundant image descriptions, broken-image fallback, original uploads excluded from deployment',status:'passed'});
 const axe=await readFile(process.env.AXE_SOURCE_PATH,'utf8');
 for(const s of [{name:'phone',width:390,height:900},{name:'desktop',width:1440,height:900},{name:'large-text',width:1280,height:900,large:true},{name:'reflow',width:320,height:256},{name:'forced-colors',width:390,height:900,colors:'active'}]){
  const page=await b.newPage({viewport:{width:s.width,height:s.height},forcedColors:s.colors||'none'});
  for(const route of ['/lab','/lab/people','/lab/contact','/lab/research/sign-language-headset','/lab/research/calamansi-disease']){
   await page.goto(base+route);await page.waitForLoadState('networkidle');await page.locator('img').evaluateAll(es=>es.forEach(e=>e.loading='eager'));
   await page.waitForFunction(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0));
   if(s.large)await page.addStyleTag({content:'html {font-size:200% !important}'});
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`${s.name} ${route} overflow`);
   await page.addScriptTag({content:axe});const audit=await page.evaluate(()=>axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']}}));
   reports.push({scenario:s.name,route,violations:audit.violations.map(v=>v.id),manualReview:audit.incomplete.map(v=>v.id)});
   if(route!='/lab/people')await page.screenshot({path:`qa/screenshots/portraits/${s.name}-${route.replaceAll('/','-')}.png`,fullPage:true});
   if(route==='/lab/people')await page.screenshot({path:`qa/screenshots/portraits/${s.name}-people-directory.png`,fullPage:true});
  }
  await page.close();
 }
 await writeFile('qa/portrait-results.json',JSON.stringify(reports,null,2));assert(reports.every(r=>!r.violations||r.violations.length===0));console.log('Portrait identity/loading/fallback checks and 25 layout/accessibility scenarios passed.');
}finally{await b.close();}
