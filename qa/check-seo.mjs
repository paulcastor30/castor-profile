import {chromium} from '@playwright/test';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import assert from 'node:assert/strict';
const base=process.env.PORTFOLIO_URL||'http://127.0.0.1:8081';const site='https://paulrodolfcastor.vercel.app';
const b=await chromium.launch({executablePath:process.env.BROWSER_EXECUTABLE});const reports=[];
await mkdir('qa/screenshots/seo',{recursive:true});
try {
 const p=await b.newPage({javaScriptEnabled:false});const xml=await readFile('dist/sitemap.xml','utf8');const urls=[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);assert.equal(urls.length,38);assert.equal(new Set(urls).size,38);const titles=new Set();
 for(const url of urls){
 const path=new URL(url).pathname;const response=await p.goto(base+path);assert.equal(response.status(),200);assert.equal(await p.locator('h1').count(),1);
 const title=await p.title();assert(!titles.has(title),'Duplicate title');titles.add(title);
 assert.equal(await p.locator('link[rel="canonical"]').getAttribute('href'),url);
 assert.equal(await p.locator('meta[name="robots"]').getAttribute('content'),'index, follow');
 assert.equal(await p.locator('meta[property="og:title"]').getAttribute('content'),title);
 assert.equal(await p.locator('meta[property="og:url"]').getAttribute('content'),url);
 const desc=await p.locator('meta[name="description"]').getAttribute('content');assert(desc.length>30);
 const scripts=await p.locator('script[type="application/ld+json"]').allTextContents();assert.equal(scripts.length,1);const graph=JSON.parse(scripts[0])['@graph'];
 const page=graph.find(g=>['WebPage','ProfilePage'].includes(g['@type']));assert.equal(page.url,url);assert.equal(page.description,desc);
 assert(graph.some(g=>g['@type']==='Organization'&&g.name==='Edge Intelligence and AIoT Research Laboratory'));
 if(path==='/lab/people'){assert.equal(graph.find(g=>g['@type']==='ItemList').itemListElement.length,84);assert.equal(await p.locator('.person-entry').count(),84);assert.equal(await p.locator('.lab-head a').count(),2);}
 reports.push({path,title,initialHtml:true,structuredData:true});
 }
 await p.goto(base+'/404');assert.equal(await p.locator('meta[name="robots"]').getAttribute('content'),'noindex, follow');assert.equal(await p.locator('script[type="application/ld+json"]').count(),0);
 const invalid=await b.newPage();await invalid.goto(base+'/lab/people/unknown');await invalid.waitForLoadState('networkidle');assert.equal(await invalid.locator('main').count(),1);assert.equal(await invalid.locator('meta[name="robots"]').getAttribute('content'),'noindex, follow');await invalid.close();
 const robots=await (await p.request.get(base+'/robots.txt')).text();assert(robots.includes(`Sitemap: ${site}/sitemap.xml`));assert(robots.includes('Allow: /'));await p.close();
 const removed=await b.newPage();
 for(const slug of ['paul-rodolf-castor','apple-rose-alce']){assert(!urls.includes(site+'/lab/people/'+slug));await removed.goto(base+'/lab/people/'+slug);await removed.waitForLoadState('networkidle');assert.equal(await removed.locator('meta[name="robots"]').getAttribute('content'),'noindex, follow');assert.equal(await removed.locator('script[type="application/ld+json"]').count(),0);}
 await removed.goto(base+'/lab/people');await removed.waitForLoadState('networkidle');assert.equal(await removed.locator('nav[aria-label="Lab head profiles"]').count(),0);assert.equal(await removed.locator('.lab-head a').count(),2);await removed.close();
 await writeFile('qa/seo-results.json',JSON.stringify(reports,null,2));console.log('38 public pages, retained SEO metadata, sitemap, and removal of both profile routes/links passed.');
}finally{await b.close();}
