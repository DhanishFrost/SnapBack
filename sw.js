if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>n(e,t),l={module:{uri:t},exports:o,require:c};i[t]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-7d0c4a25.css",revision:null},{url:"assets/index-b91a3c91.js",revision:null},{url:"index.html",revision:"ff393019aa7392f9ab661438798e7a52"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"icon192.png",revision:"598db2735392ee3ca632074d3e9e5dbf"},{url:"icon512.png",revision:"406adc15c25445208f8069bcad81d428"},{url:"manifest.webmanifest",revision:"69002349466b9e8f522705904cc32ea3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
