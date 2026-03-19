import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // 1. Ton URL GitHub Pages (sans le nom du repo)
  site: 'https://2026proton23000.github.io',
  // 2. Le nom de ton dépôt GitHub précédé d'un slash
  base: '/hexagone', 
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "es", "en"],
    routing: {
        prefixDefaultLocale: true
    }
  }
});