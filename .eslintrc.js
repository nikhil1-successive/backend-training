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
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    '@typescript-eslint/no-explicit-any': 'off',  // Turn off the no-explicit-any rule
  },
  ignorePatterns: ['dist/'], // Add this line to ignore the dist directory
};
