import { defineConfig } from 'vite';
import { readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
export default defineConfig({plugins:[{
 name:'studylearn-offline-and-sharing',
 transformIndexHtml(html){const origin=process.env.VITE_SITE_URL;if(!origin)return html;const base=new URL(origin);const image=new URL('/assets/og-image.png',base).href;return html.replaceAll('content="/assets/og-image.png"','content="'+image+'"').replace('</head>','<meta property="og:url" content="'+base.href+'"/></head>');},
 async closeBundle(){const root=path.resolve('dist');const files=['/','/index.html'];async function walk(dir,rel=''){for(const e of await readdir(dir,{withFileTypes:true})){if(e.isDirectory())await walk(path.join(dir,e.name),rel+'/'+e.name);else if(e.name!=='sw.js')files.push(rel+'/'+e.name);}}await walk(root);const version='studylearn-'+Date.now();const source='const CACHE='+JSON.stringify(version)+';\nconst ASSETS='+JSON.stringify([...new Set(files)])+';\n'+
"self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));\n"+
"self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('studylearn-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n"+
"self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).catch(()=>e.request.mode==='navigate'?caches.match('/index.html'):Response.error())));});\n";await writeFile(path.join(root,'sw.js'),source);}
}]});
