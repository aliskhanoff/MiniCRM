module.exports = {
  root: true,
  extends: [
  'airbnb',
  'airbnb-typescript',
  'plugin:react/recommended',
  'plugin:@typescript-eslint/recommended',
  'prettier',
],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      './frontend/tsconfig.json',
      './electron/tsconfig.json',
    ],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    '.eslintrc.cjs',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // Vite/React 17+
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
