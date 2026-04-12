import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'

export default [
  {
    ignores: ['dist/', 'node_modules/', '*.js'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
      '@typescript-eslint/no-use-before-define': [
        'error'
      ],
      '@typescript-eslint/no-var-requires':'off',
      '@typescript-eslint/object-curly-spacing': 'off',
      'camelcase': 'off',
      'dot-notation': 'off',
      'import/no-import-module-exports': 'off',
      'import/prefer-default-export': 'off',
      'new-cap': 'off',
      'no-await-in-loop': 'off',
      'no-console': 'off',
      'no-continue': 'off',
      'no-loop-func': 'off',
      'no-nested-ternary':'off',
      'no-param-reassign': 'off',
      'no-plusplus': 'off',
      'no-restricted-globals': 'off',
      'no-restricted-syntax': 'off',
      'no-shadow': 'off',
      'no-underscore-dangle':'off',
      'no-use-before-define': 'off',
      'no-useless-constructor': 'off',
      'no-useless-escape': 'off',
      'object-curly-spacing': 'off',
      'prettier/prettier': 'error',
    },
  },
]