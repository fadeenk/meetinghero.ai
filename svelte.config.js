import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/meetinghero.ai' : '',
			assets: process.env.NODE_ENV === 'production' ? '/meetinghero.ai' : ''
		},
		appDir: 'app',
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
