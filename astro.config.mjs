// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sekgrafi4106.github.io',
  base: '/mirac-insaat',
  vite: {
    plugins: [tailwindcss()]
  }
});