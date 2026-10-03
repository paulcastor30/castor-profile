import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import {readFile,writeFile} from 'node:fs/promises';
const browser=await chromium.launch({executablePath:process.env.BROWSER_EXECUTABLE});
const base=process.env.PORTFOLIO_URL||'http://127.0.0.1:8081';
const reports=[];
try{
 const page=await browser.newPage({viewport:{width:1440,height:900}});
 for(const route of ['/lab','/lab/research','/lab/people','/lab/research/goat-geofencing','/lab/contact']){
  await page.goto(base+route);await page.waitForLoadState('networkidle');
  const expected=await page.locator("a,button,input,select,summary").evaluateAll(es=>es.filter(e=>e.getClientRects().length&&!e.disabled).length);
  const seen=new Set();
  for(let i=0;i<100;i++){
   await page.keyboard.press('Tab');
   const f=await page.evaluate(()=>{const e=document.activeElement,r=e.getBoundingClientRect(),s=getComputedStyle(e),h=document.querySelector('header').getBoundingClientRect();return {tag:e.tagName,key:`${e.tagName}:${e.id}:${e.getAttribute('href')}:${e.textContent}`,top:r.top,bottom:r.bottom,outline:parseFloat(s.outlineWidth),style:s.outlineStyle,inHeader:!!e.closest('header'),skip:e.classList.contains('skip-link'),headerBottom:h.bottom,label:e.textContent};});
   if(f.tag==='BODY'&&seen.size>0)break;
   if(seen.has(f.key))break;seen.add(f.key);
   assert(f.outline>=2&&f.style!=='none',`Invisible focus ${route} ${f.label}`);
   assert(f.inHeader||f.skip||f.top>=f.headerBottom-1,`Obscured focus ${route} ${f.label}`);
  }
  assert.equal(seen.size,expected,`Incomplete keyboard walk ${route}`);reports.push({route,focusedControls:seen.size});
 }
 const staticPage=await browser.newPage({javaScriptEnabled:false});
 const sitemap=await readFile('public/sitemap.xml','utf8');
 const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
 assert.equal(urls.length,26);
 for(const url of urls){
  const route=new URL(url).pathname;
  const response=await staticPage.goto(base+route);
  assert.equal(response.status(),200);
  assert.equal(await staticPage.locator('h1').count(),1);
  assert.equal(await staticPage.locator('link[rel="canonical"]').getAttribute('href'),url);
 }
 reports.push({check:'26 initial HTML pages without JavaScript',status:'passed'});
 await writeFile('qa/lab-keyboard-results.json',JSON.stringify(reports,null,2));console.log(JSON.stringify(reports));
}finally{await browser.close();}
