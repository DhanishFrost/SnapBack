if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>s(e,t),l={module:{uri:t},exports:o,require:c};i[t]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-52c061c1.js",revision:null},{url:"assets/index-7d0c4a25.css",revision:null},{url:"index.html",revision:"56a797bc38f9d1df3ea1679b11d5a961"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"icon192.png",revision:"598db2735392ee3ca632074d3e9e5dbf"},{url:"icon512.png",revision:"406adc15c25445208f8069bcad81d428"},{url:"manifest.webmanifest",revision:"69002349466b9e8f522705904cc32ea3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
