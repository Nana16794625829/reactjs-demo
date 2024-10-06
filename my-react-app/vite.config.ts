import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: 'dist'
  },
  server: {
    proxy: {
      // 代理 API 請求
      '/api': {
        target: 'http://localhost:3000', // Mock backend server url
        changeOrigin: true,
      }
    }
  }
})
