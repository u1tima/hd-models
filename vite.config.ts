import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vite.dev/config/
export default defineConfig({
	server: {
		open: true,
		host: true,
		watch: {
			usePolling: true,
		},
	},
	build: {
		sourcemap: true,
		cssMinify: false,
	},
	plugins: [
		vue(),
		Components({
			resolvers: [
				AntDesignVueResolver({
					importStyle: false, // css in js
				}),
			],
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: ['import'],
				additionalData: '@import "@/scss/colors.scss";',
			},
		},

	},
});
