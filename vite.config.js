import path, { resolve } from 'node:path';
import { defineConfig } from 'vite';
import * as glob from 'glob';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // Habilita características avanzadas de LESS
      },
    },
  },
  build: {
    assetsDir: 'assets', // Carpeta donde se guardarán los recursos
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]', // Usa marcadores válidos
      },
    },
    minify: true, // Minificar el código
  },
});