// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jacobbpp.github.io/Intro-To-Series/',
  base: '/Intro-To-Series/',
  integrations: [mdx(), sitemap()],
});
