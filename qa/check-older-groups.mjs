import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const groups=[
  {
    "slug": "smartpipes-leak-detection",
    "shortTitle": "Smartpipes: underground pipe leak detection",
    "title": "Simulation of IoT-Enabled Smartpipes: Prototyping Underground Potential Leak Detection Method in Small-Diameter Plastic Pipes Using Larawan",
    "summary": "A simulation and prototype exploring ways to detect potential leaks in small underground plastic pipes.",
    "adviser": null,
    "coAdviser": "Paul Rodolf P. Castor",
    "researchers": [
      "Michael Angelo L. Natingga Jr.",
      "Aira Mae I. Sumile",
      "Kent Brian H. Villacorta"
    ],
    "graduationYear": 2024,
    "program": "BS",
    "outputs": []
  },
  {
    "slug": "rfid-room-scheduling",
    "shortTitle": "RFID access and room scheduling",
    "title": "RFID Login Using Esp8266 and Web-Based Scheduling System for Classroom and Laboratory Utilization",
    "summary": "RFID-based login and a web scheduling system designed to manage classroom and laboratory use.",
    "adviser": "Apple Rose B. Alce",
    "coAdviser": "Paul Rodolf P. Castor",
    "researchers": [
      "Leah S. Apatan",
      "Krizel Joy A. Atillo",
      "Renz Patrick D. Santillan"
    ],
    "graduationYear": 2023,
    "program": "BS",
    "outputs": []
  },
  {
    "slug": "scallion-hydroponics",
    "shortTitle": "Scallion growth monitoring",
    "title": "ESP32 Hydroponic Bed System for Growth Monitoring of Scallion (Allium fistulosum) Spices",
    "summary": "An ESP32-based hydroponic bed system designed to monitor scallion growth.",
    "adviser": "Apple Rose B. Alce",
    "coAdviser": null,
    "researchers": [
      "Justin Jay B. Esconde",
      "Christian Noel C. Eslit",
      "Junesep Cagas"
    ],
    "graduationYear": 2023,
    "program": "BS",
    "outputs": []
  },
  {
    "slug": "rids-reverse-vending",
    "shortTitle": "RIDS-RVM: reverse vending and recycling",
    "title": "Development of RIDS - RVM: a Reverse Vending Machine with Integrated Points System and Image-Based Detection and Segregation for Plastic Bottles and Aluminum Cans",
    "summary": "A reverse vending machine designed to recognize and sort plastic bottles and aluminum cans, with an integrated points system.",
    "adviser": "Apple Rose B. Alce",
    "coAdviser": null,
    "researchers": [
      "Kent Roian R. Basit",
      "Rochelle James Jaudian",
      "Francis Miguel C. Colaljo"
    ],
    "graduationYear": 2023,
    "program": "BS",
    "outputs": []
  },
  {
    "slug": "rainwater-harvesting-filtration",
    "shortTitle": "Rainwater collection, filtration and monitoring",
    "title": "Development and Evaluation of a Sustainable Rainwater Harvesting, Filter, and Monitoring System",
    "summary": "A system designed to collect, filter and monitor rainwater.",
    "adviser": "Apple Rose B. Alce",
    "coAdviser": null,
    "researchers": [
      "Charlie A. Figuracion",
      "Marichu O. Gaite",
      "Jason Cuajao"
    ],
    "graduationYear": 2023,
    "program": "BS",
    "outputs": []
  },
  {
    "slug": "rainwater-aeroponics",
    "shortTitle": "Rainwater harvesting and aeroponics monitoring",
    "title": "Real-Time Monitoring System for Integrated Rainwater Harvesting and Aeroponics: an IoT Applications",
    "summary": "Connected sensors designed to monitor an integrated rainwater harvesting and aeroponics system.",
    "adviser": "Apple Rose B. Alce",
    "coAdviser": "Antonio S. Marajas",
    "researchers": [
      "Kilsey Deannielle G. Javier",
      "Desirie Nicole C. Daligdig",
      "Jasiel Emro S. Anasco"
    ],
    "graduationYear": 2023,
    "program": "BS",
    "outputs": []
  },
  {
    "slug": "onion-garlic-vertical-farming",
    "shortTitle": "Vertical farming for onion and garlic",
    "title": "Smart Vertical Farming for (Allium Cepa) Onion and (Allium Sativum) Garlic Spices Using ESP8266",
    "summary": "An ESP8266-based system designed to support vertical farming of onion and garlic.",
    "adviser": "Apple Rose B. Alce",
    "coAdviser": null,
    "researchers": [
      "Kyle Christian P. Belono",
      "Teward G. Celesio",
      "Jezryl Ann F. Colanse"
    ],
    "graduationYear": 2023,
    "program": "BS",
    "outputs": []
  }
];const portraits=[{"name":"Kyle Christian P. Belono","slug":"kyle-christian-p-belono"},{"name":"Kent Brian H. Villacorta","slug":"kent-brian-h-villacorta"},{"name":"Marichu O. Gaite","slug":"marichu-o-gaite"},{"name":"Desirie Nicole C. Daligdig","slug":"desirie-nicole-c-daligdig"},{"name":"Kilsey Deannielle G. Javier","slug":"kilsey-deannielle-g-javier"},{"name":"Jezryl Ann F. Colanse","slug":"jezryl-ann-f-colanse"},{"name":"Renz Patrick D. Santillan","slug":"renz-patrick-d-santillan"},{"name":"Krizel Joy A. Atillo","slug":"krizel-joy-a-atillo"},{"name":"Francis Miguel C. Colaljo","slug":"francis-miguel-c-colaljo"},{"name":"Aira Mae I. Sumile","slug":"aira-mae-i-sumile"},{"name":"Michael Angelo L. Natingga Jr.","slug":"michael-angelo-l-natingga-jr"}];const axe=await readFile(process.env.AXE_SOURCE_PATH,'utf8');
const b=await chromium.launch({executablePath:process.env.BROWSER_EXECUTABLE});
try {
for(const width of [390,1440,320]) {
const p=await b.newPage({viewport:{width,height:900}});await p.route('**/_vercel/insights/script.js',r=>r.fulfill({contentType:'application/javascript',body:''}));
for(const group of groups){await p.goto('http://127.0.0.1:8081/lab/research/'+group.slug);await p.waitForLoadState('networkidle');assert.equal(await p.locator('.thesis-record > p').innerText(),group.title);assert.deepEqual(await p.locator('.researcher-card h3').allTextContents(),group.researchers);
const expected=group.researchers.filter(n=>portraits.some(p=>p.name===n)).length;assert.equal(await p.locator('.researcher-card img').count(),expected);assert.equal(await p.locator('.researcher-card .portrait-placeholder:not(:has(img))').count(),3-expected);
assert.equal(await p.locator('.supervision dt').filter({hasText:'Thesis adviser'}).count(),group.adviser?1:0);assert(!(await p.locator('.supervision').innerText()).includes('undefined'));
await p.locator('img').evaluateAll(es=>es.forEach(e=>e.loading='eager'));await p.waitForFunction(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0));assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await p.addScriptTag({content:axe});const a=await p.evaluate(()=>axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa','wcag22aa']}}));assert.deepEqual(a.violations.map(v=>v.id),[]);if(width!==320)await p.screenshot({path:`/private/tmp/older-${width}-${group.slug}.png`,fullPage:true});}
await p.close();}
console.log('Seven group records, 11 portraits, ten blank photo frames, unassigned adviser, and 21 layout/accessibility checks passed.');
}finally{await b.close();}
