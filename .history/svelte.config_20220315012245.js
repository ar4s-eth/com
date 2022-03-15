import multiAdapter from '@macfja/svelte-multi-adapter'
import adapter from '@sveltejs/adapter-auto';
import staticAdapter from '@sveltejs/adapter-static'
import nodeAdapter from '@sveltejs/adapter-node'
import svelte-adapter-deno from 'svelte-adapter-deno';
import preprocess from 'svelte-preprocess';
import UnoCss from 'unocss/vite';
import { extractorSvelte } from '@unocss/core';
import { presetAttributify, presetIcons, presetUno } from 'unocss';



/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: multiAdapter([staticAdapter(), nodeAdapter(/* ... */), adapter()]),

		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte',
		vite: {
			plugins: [
				UnoCss({
					theme: {
						fontFamily: {
							sans: 'Outfit'
						}
					},
					extractors: [extractorSvelte],
					shortcuts: [
						{
							layout: 'max-w-1000px mx-auto p-4'
						}
					],
					presets: [
						presetAttributify(),
						presetUno(),
						presetIcons({
							extraProperties: {
								display: 'inline-block',
								'vertical-align': 'middle'
							}
						})
					]
				})
			]
		}
	}
};

export default config;
