import adapter from '@sveltejs/adapter-cloudflare';
import seqPreprocessor from 'svelte-sequential-preprocessor'
import { preprocessThrelte } from '@threlte/preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: seqPreprocessor([preprocessThrelte()]),
};

export default config; 
