import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
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
            "src": "/src/assets/icons/google.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/src/assets/icons/google.png",
            "sizes": "512x512",
            "type": "image/png"
          },
        ]
        
      },
    }),
  ],
})


