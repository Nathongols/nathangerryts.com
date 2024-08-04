import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = defineConfig({
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['three', 'troika-three-text']
	}
});

export default config;