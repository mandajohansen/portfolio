import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative paths, so the site works both at the root of a domain and in a sub-folder
  // (e.g. mandajohansen.github.io/amandajohansen.github.io/).
  base: './',
});
