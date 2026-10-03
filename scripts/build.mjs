import { spawnSync } from 'node:child_process';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const vite = resolve('node_modules/vite/bin/vite.js');
function build(args) {
  const result = spawnSync(process.execPath, [vite, ...args], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status || 1);
}
build(['build']);
build(['build', '--ssr', 'src/prerender.tsx', '--outDir', '.prerender']);
const { renderPage, paths } = await import('../.prerender/prerender.js');
const shell = await readFile('dist/index.html', 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
async function save(path, destination) {
  const { html, metadata } = renderPage(path);
  let page = shell.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  page = page.replace(/<title>.*?<\/title>/, `<title>${escape(metadata.title)}</title>`);
  page = page.replace(/(<meta name="description" content=")[^"]*/, `$1${escape(metadata.description)}`);
  page = page.replace(/(<link rel="canonical" href=")[^"]*/, `$1${escape(metadata.canonical)}`);
  page = page.replace(/(<meta property="og:title" content=")[^"]*/, `$1${escape(metadata.title)}`);
  page = page.replace(/(<meta property="og:description" content=")[^"]*/, `$1${escape(metadata.description)}`);
  page = page.replace(/(<meta property="og:url" content=")[^"]*/, `$1${escape(metadata.canonical)}`);
  page = page.replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${escape(metadata.title)}`);
  page = page.replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${escape(metadata.description)}`);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, page);
}
for (const path of paths) await save(path, path === '/' ? 'dist/index.html' : `dist${path}.html`);
await save('/404', 'dist/404.html');
await rm('.prerender', { recursive: true, force: true });
console.log(`Pre-rendered ${paths.length} public pages plus the not-found page.`);
