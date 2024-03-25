import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require("path");
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.js'),
      name: 'vue3-push-notification-preview',
      filename: 'vue3-push-notification-preview'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  }
})