if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const d=e=>r(e,c),a={module:{uri:c},exports:o,require:d};i[c]=Promise.all(n.map((e=>a[e]||d(e)))).then((e=>(s(...e),o)))}}define(["./workbox-d8bdcace"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assassins-creed-valhalla.jpg",revision:"995a91807f7c0a7daf8b6498a7b59f4a"},{url:"assets/index-80e12fcd.js",revision:null},{url:"assets/index-90ad880c.css",revision:null},{url:"bronze.png",revision:"39855149760306802092a9e231414597"},{url:"cod2nd.webp",revision:"564f50129ec6da53914776193fc33462"},{url:"correct.mp3",revision:"46f7a472b621ccef5488c250b41e6f83"},{url:"esrb.svg",revision:"9408a950704341deb443025ac856d0fe"},{url:"forza5.jpg",revision:"cd3354e264f28f562fdb780924b7d15e"},{url:"gold.png",revision:"f46c3354881348be411558b401cd80bb"},{url:"Hangman.jpg",revision:"033f3fe36a2e7cf5c82f49d808f79942"},{url:"homecod.jpg",revision:"febeb37234c59db285b57b3b7a08c4c1"},{url:"icon192.png",revision:"598db2735392ee3ca632074d3e9e5dbf"},{url:"icon512.png",revision:"406adc15c25445208f8069bcad81d428"},{url:"incorrect.mp3",revision:"9a6ebd59266412d4c124ef83f578c7cd"},{url:"index.html",revision:"34ac117b98a3707b8572249d7c8b5bdd"},{url:"Login.jpg",revision:"56bd030fa9b1ad149e9e06fd75d54043"},{url:"rdr2.jpg",revision:"9f12f6b2101acc3424d328a755329615"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"signup1.jpg",revision:"20492dbc162ba0f92606b68a6c33bc0f"},{url:"silver.png",revision:"ee2b587323916f0467758cfb8fb57210"},{url:"Snapback-Logo.png",revision:"5ee5c24c2a0d38879f91a43ba0b51611"},{url:"spiderman.jpg",revision:"f206fd95b07a369e5986383d4344b5c5"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"icon192.png",revision:"598db2735392ee3ca632074d3e9e5dbf"},{url:"icon512.png",revision:"406adc15c25445208f8069bcad81d428"},{url:"manifest.webmanifest",revision:"69002349466b9e8f522705904cc32ea3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/,new e.StaleWhileRevalidate({cacheName:"google-fonts",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:30})]}),"GET")}));
