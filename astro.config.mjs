import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import vercel from "@astrojs/vercel";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false
    }
  },

  adapter: vercel()
});