import globals from 'globals';
import jsEslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import vueLint from 'eslint-plugin-vue';
import stylisticLint from '@stylistic/eslint-plugin';

const ignoresConfig = [{
    ignores: [
        '**/node_modules/*',
        '**/dist/*',
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
            'vue/script-indent': ['error', 'tab', { baseIndent: 1, switchCase: 1 }],
            'vue/multi-word-component-names': 'off',
            'vue/no-reserved-component-names': ['error', {
                'disallowVueBuiltInComponents': true,
                'disallowVue3BuiltInComponents': false,
                'htmlElementCaseSensitive': true,
            }]
            // 'vue/html-closing-bracket-newline': [
            // 	'error',
            // 	{
            // 		singleline: 'never',
            // 		multiline: 'never',
            // 		selfClosingTag: {
            // 			singleline: 'never',
            // 			multiline: 'never',
            // 		},
            // 	},
            // ],
            // 'vue/html-indent': ['error', 4],
            // 'vue/component-definition-name-casing': ['error', 'PascalCase'],
            // 'vue/prop-name-casing': ['error', 'camelCase'],
            // 'vue/attribute-hyphenation': ['error', 'always'],
            // 'vue/order-in-components': ['error'],
            // 'vue/max-attributes-per-line': ['error', {
            // 	singleline: {
            // 		max: 1,
            // 	},
            // 	multiline: {
            // 		max: 1,
            // 	},
            // }],
            // 'vue/no-v-html': 'off',
            // 'vue/first-attribute-linebreak': ['error', {
            // 	singleline: 'beside',
            // 	multiline: 'beside',
            // }],
            // // TODO vue/attributes-order rule can't order attributes by our guidelines. Need to create own plugin.
            // 'vue/attributes-order': 'off',
            // // 'vue/attributes-order': ['error', {
            // //     'order': [
            // //         'DEFINITION',
            // //         'LIST_RENDERING',
            // //         'CONDITIONALS',
            // //         'CONTENT',
            // //         'RENDER_MODIFIERS',
            // //         'SLOT',
            // //         'OTHER_DIRECTIVES',
            // //         'TWO_WAY_BINDING',
            // //         'OTHER_ATTR',
            // //         'GLOBAL',
            // //         'UNIQUE',
            // //         'EVENTS',
            // //     ],
            // //     'alphabetical': false,
            // // }],
            // 'vue/v-slot-style': ['error', {
            // 	atComponent: 'v-slot',
            // 	default: 'v-slot',
            // 	named: 'longform',
            // }],
            // 'vue/component-name-in-template-casing': [
            // 	'error',
            // 	'PascalCase',
            // 	{
            // 		registeredComponentsOnly: false,
            // 	},
            // ],
            // 'vue/no-mutating-props': ['error', {
            // 	shallowOnly: true,
            // }],
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
