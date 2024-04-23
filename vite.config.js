import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from "vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    commonjs({
      filter(id) {
        if (["libs/ckeditor5/build/ckeditor.js"].includes(id)) {
          return true;
        }
      },
    }),],
  optimizeDeps: {
    include: ['ckeditor5-custom-build']
  },
  build: {
    commonjsOptions: { exclude: ['ckeditor5-custom-build'] },
    rollupOptions: {
      external: ['react', 'react-is', 'react-router', 'react/jsx-runtime', 'CKEditor'],
    }
  },

})