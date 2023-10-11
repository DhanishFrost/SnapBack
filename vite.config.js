import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist', // Set the output directory to 'dist'
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'SnapBack',
        short_name: 'SnapBack',
        description: 'A gaming web application',
        start_url: '/SnapBack/',
        scope: './',
        orientation: 'portrait',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        prefer_related_applications: true,
        icons: [
          {
            "src": "icon192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "icon512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
        ]
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,svg,json,mp4,mp3,webp}'],
        globDirectory: 'dist',
        swDest: 'dist/sw.js',
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [ 
          {
            urlPattern: new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts',
              cacheableResponse: {
                statuses: [0, 200],
              },
              expiration: {
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
              },
            },
          },
        ],
      },
    }),
  ],
})


