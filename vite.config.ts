import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Dominio www.stockyinventory.com (CNAME) → GitHub Pages sirve el sitio en la raíz /.
export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    assetsDir: 'assets',
    sourcemap: false,
  },
  publicDir: 'public',
});
