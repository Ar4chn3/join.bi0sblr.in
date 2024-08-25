import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  base: '/',
  integrations: [starlight({
    title: 'bi0s Recruitment',
    logo: {
      src: './src/assets/logo.svg'
    },
    sidebar: [
    {
      label: '[list] Getting Started',
      link: '/getting-started/'
    }, {
      label: '[box] Concepts',
      autogenerate: {
        directory: 'concepts'
      }
    }, {
      label: '[book] Reference',
      autogenerate: {
        directory: 'reference'
      }
    }],
    components: {
      ThemeProvider: './src/components/ThemeProvider.astro',
      ThemeSelect: './src/components/ThemeSelect.astro',
      SiteTitle: './src/components/SiteTitle.astro',
      Sidebar: './src/components/Sidebar.astro',
      Pagination: './src/components/Pagination.astro',
      Hero: './src/pages/index.astro'
    },
    customCss: ['@fontsource-variable/space-grotesk/index.css', '@fontsource/space-mono/400.css', '@fontsource/space-mono/700.css', './src/styles/theme.css'],
    expressiveCode: {
      themes: ['vitesse-dark']
    },
    pagination: false,
    lastUpdated: true
  }), tailwind(), react()],
  output: "static"
});