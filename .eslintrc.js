module.exports = {
    root: true,
    env: {
      node: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: [
      '@typescript-eslint',
    ],
    ignorePatterns: ['dist/'], // Add this line to ignore the dist directory
  };
  