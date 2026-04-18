import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// En producción, coincide con la URL del repo: /<nombre-repo>/
// GitHub Actions puede sobrescribir con: vite build --base /${{ repo }}/
export default defineConfig(({ mode }) => ({
  plugins: [tailwindcss(), react()],
  base: mode === 'production' ? '/StockyPolitics/' : '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    assetsDir: 'assets',
    sourcemap: false,
  },
  publicDir: 'public',
}));
