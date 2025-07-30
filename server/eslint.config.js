import stylisticPlugin from '@stylistic/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser'

export default [{
	files: ['**/*.ts'],
	languageOptions: {
		parser: typescriptParser
	},
	plugins: {
		'@stylistic': stylisticPlugin,
	},
	rules: {
		"@stylistic/semi": ["error", "always"],
		'@stylistic/indent': ['error', 'tab'],
		'@stylistic/quotes': ['error', 'single'],
		'@stylistic/arrow-parens': ["error", "always"],
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				"args": "all",
				"argsIgnorePattern": "^_",
				"caughtErrors": "all",
				"caughtErrorsIgnorePattern": "^_",
				"destructuredArrayIgnorePattern": "^_",
				"varsIgnorePattern": "^_",
				"ignoreRestSiblings": true
			}
		]
	},
}];
