import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mars-test-page/',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler/'
      }
    }
  }
});