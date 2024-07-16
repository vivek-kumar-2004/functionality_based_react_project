module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // If using TypeScript
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint', // If using TypeScript
  ],
  rules: {
    // Add your custom rules here
    'react/react-in-jsx-scope': 'off', // Not needed with React 17+
    'no-unused-vars': 'warn', // Warn instead of error for unused variables
    'semi': ['error', 'always'], // Enforce semicolons
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
};
