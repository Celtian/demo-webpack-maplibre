import js from '@eslint/js';
import htmlEslint from '@html-eslint/eslint-plugin';
import htmlParser from '@html-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    ignores: ['dist/**', 'build/**', 'webpack.config*.js', 'node_modules/**'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: htmlParser,
    },
    plugins: {
      '@html-eslint': htmlEslint,
    },
    rules: {
      ...htmlEslint.configs.recommended.rules,
    },
  },
];
