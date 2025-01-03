import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: "/RestCountryApiWithVue/",
  server: {
    proxy: {
      '/api' : {
        target: 'https://restcountries.com/v3.1/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/,'') 
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
