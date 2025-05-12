import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({ fallback: 'index.html' }),
		paths: {
			base: process.argv.includes('dev') ? '' : '/meetinghero.ai'
		},
		appDir: 'app',
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
