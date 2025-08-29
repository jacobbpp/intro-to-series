import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://jacobbpp.github.io/intro-to-series',
	base: '/intro-to-series',
	integrations: [mdx(), sitemap()],
});
