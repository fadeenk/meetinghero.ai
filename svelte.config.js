import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({}),
		appDir: 'app',
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
