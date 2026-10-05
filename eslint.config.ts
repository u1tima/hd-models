import globals from 'globals';
import jsEslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import vueLint from 'eslint-plugin-vue';
import stylisticLint from '@stylistic/eslint-plugin';

const ignoresConfig = [{
	ignores: [
		'**/node_modules/*',
		'**/dist/*',
		'.nuxt/**',
		'.output/**',
		'public/**',
	]
}];

const globalConfig = [{
	languageOptions: {
		globals: {
			...globals.node,
			...globals.browser,
		}
	}
}];

const jsConfig = [{
	...jsEslint.configs.recommended
}];

const tsConfig = [
	...tsEslint.configs.strict,
	{
		files: ['**/*.ts'],
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					'args': 'all',
					'argsIgnorePattern': '^_',
					'caughtErrors': 'all',
					'caughtErrorsIgnorePattern': '^_',
					'destructuredArrayIgnorePattern': '^_',
					'varsIgnorePattern': '^_',
					'ignoreRestSiblings': true
				}
			]
		}
	}
];

const vueConfig = [
	...vueLint.configs['flat/essential'],
	{
		files: ['**/*.vue'],
		languageOptions: {
			parserOptions: {
				parser: tsEslint.parser,
				sourceType: 'module',
			},
		},
		rules: {
			// Авто-импорты Nuxt (definePageMeta, useHead и прочие) и глобальные типы
			// ESLint не видит, а TypeScript их знает через .nuxt/imports.d.ts,
			// поэтому дублирующая проверка здесь только даёт ложные срабатывания.
			'no-undef': 'off',
			'vue/script-indent': ['error', 'tab', { baseIndent: 1, switchCase: 1 }],
			'vue/multi-word-component-names': 'off',
			'vue/no-reserved-component-names': ['error', {
				'disallowVueBuiltInComponents': true,
				'disallowVue3BuiltInComponents': false,
				'htmlElementCaseSensitive': true,
			}]
		},
	},
];

const stylisticConfig = [{
	plugins: {
		'@stylistic': stylisticLint,
	},
	rules: {
		'@stylistic/eol-last': ['error', 'always'],
		'@stylistic/semi': ['error', 'always'],
		'@stylistic/quotes': ['error', 'single'],
		'@stylistic/arrow-parens': ['error', 'always'],
		'@stylistic/no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
	},
}];

/** @type {import('eslint').Linter.Config[]} */
export default [
	...ignoresConfig,
	...globalConfig,
	...jsConfig,
	...tsConfig,
	...vueConfig,
	...stylisticConfig,
];
