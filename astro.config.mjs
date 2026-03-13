// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hartwell-stone.pages.dev',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [sitemap({
    filter: (page) => !page.includes('/privacy/') && !page.includes('/terms/'),
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
