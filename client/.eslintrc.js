module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
        sourceType: "module",
      },
    },
  ],

  rules: {
    'import/no-cycle': [0],
    '@typescript-eslint/no-unsafe-assignment': 'error',
    quotes: [2, 'single'],
    'quote-props': [2, 'as-needed'],
    'linebreak-style': [2, 'unix'],
    'react/jsx-props-no-spreading': [0],
    'react/function-component-definition': [2, {
      'namedComponents': 'arrow-function',
      'unnamedComponents': 'arrow-function',
    }],
  },

};
