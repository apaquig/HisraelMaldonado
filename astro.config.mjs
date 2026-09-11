import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://apaquig.github.io',
  base: '/HisraelMaldonado',
  compressHTML: true,
  server: {
    port: 4321,
    host: true
  },
  build: {
    inlineStylesheets: 'always'
  }
});
