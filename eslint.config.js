// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      react: require('eslint-plugin-react'),
    },
    rules: {
      // твои правила
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
