import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'bi0sblr Recruitment',
    logo: {
      src: './src/assets/logo.svg',
      replacesTitle: true
    },
    sidebar: [{
      label: '[list] Getting Started',
      link: '/getting-started/'
    }, {
      label: '[task] Submitting Tasks',
      link: '/submit-tasks/'
    }, {
      label: '[box] Concepts',
      autogenerate: {
        directory: 'concepts'
      }
    }, {
      label: '[book] Domains',
      autogenerate: {
        directory: 'domains'
      }
    }],
    customCss: ['./src/styles/props.css', './src/styles/styles.css'],
    expressiveCode: {
      themes: ['vitesse-dark']
    }
  }), tailwind()],
  // output: 'hybrid',
  // adapter: cloudflare()
});