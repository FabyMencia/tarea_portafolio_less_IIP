import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()], 
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, 
      },
    },
  },
});