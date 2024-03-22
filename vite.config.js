import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require("path");
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      vue: '@vue/compat'
    },
  },
  base: './',
  css: {
    preprocessorOptions: {
        scss: {
            quietDeps: true
        },
    }
  }
})