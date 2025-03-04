import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Si estás usando React

export default defineConfig({
  plugins: [react()], // Agrega los plugins que necesites
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // Habilita JavaScript en LESS (opcional)
      },
    },
  },
});