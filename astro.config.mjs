import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://apriscoapp.com.br',
  output: 'static',
  integrations: [sitemap()],
  compressHTML: true,
});
