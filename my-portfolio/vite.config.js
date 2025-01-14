import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8000', // Redirige todas las solicitudes a /api al puerto 8000
    },
  },
  optimizeDeps: {
    include: ['chart.js'],  // Asegura que Chart.js sea optimizado
  },
});
