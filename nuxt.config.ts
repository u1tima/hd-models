export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',

	// Первая итерация миграции: SPA. Переключение на SSR — отдельный шаг,
	// после того как перенос заработает и появится возможность проверить гидрацию.
	ssr: false,

	devtools: { enabled: false },

	modules: ['@pinia/nuxt'],

	css: [
		'ant-design-vue/dist/reset.css',
		'~/assets/scss/main.scss',
	],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					silenceDeprecations: ['import'],
					// Переменные подключаются в каждый SCSS-файл, как было в старом vite.config.ts.
					additionalData: '@import "@/assets/scss/colors.scss";',
				},
			},
		},
	},

	typescript: {
		strict: true,
	},

	// Единственный источник правды по подключению к базе.
	// Значения переопределяются переменными окружения NUXT_MYSQL_*.
	runtimeConfig: {
		mysql: {
			host: '',
			database: '',
			user: '',
			password: '',
		},
	},
});
