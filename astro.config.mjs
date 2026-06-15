// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

// Site URL — à adapter au domaine définitif (ex: https://www.courtin-bat.fr)
const SITE_URL = process.env.SITE_URL || 'https://www.courtin-bat.fr';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  adapter: netlify(),
  output: 'static',
  trailingSlash: 'ignore',
  redirects: {
    // Variante d'URL pointant vers la page canonique des qualifications
    '/diplomes-qualifications': '/qualifications',
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
