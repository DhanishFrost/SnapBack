if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const l=e=>s(e,t),c={module:{uri:t},exports:o,require:l};i[t]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-2995884b.js",revision:null},{url:"assets/index-983fb6fb.css",revision:null},{url:"index.html",revision:"32fb114d999d32bc0f2e482c8224c062"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"icon192.png",revision:"773eafa2864d98db60166f700d15f7d5"},{url:"icon512.png",revision:"5484c322dd2a2603fcdb99424af908ea"},{url:"manifest.webmanifest",revision:"69002349466b9e8f522705904cc32ea3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
