import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Hosting en DonDominio: el sitio se sirve en la raíz / (ver .github/workflows/deploy-ftp.yml).
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
