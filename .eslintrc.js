module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'sonarjs', '@typescript-eslint', 'simple-import-sort'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  rules: {
    'simple-import-sort/imports': ['error', {
      groups: [
      // Packages `react` related packages come first.
      ['^react', '^next', '^@?\\w'],
      // Internal packages.
      ['^(@|components)(/.*|$)'],
      // Side effect imports.
      ['^\\u0000'],
      // Parent imports. Put `..` last.
      ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
      // Other relative imports. Put same-folder imports and `.` last.
      ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
      // Style imports.
      ['^.+\\.?(styles)$']]
    }],
    'semi-spacing': 'error',
    'simple-import-sort/exports': 'error',
    'linebreak-style': 'off',
    quotes: ['error', 'single'],
    'max-len': 'off',
    'no-return-assign': 'off',
    'no-magic-numbers': 'warn',
    'valid-jsdoc': 'off',
    radix: 'off',
    'no-native-reassign': 'off',
    'multiline-ternary': 'off',
    'no-shadow': 'warn',
    'no-multiple-empty-lines': 'error',
    'no-use-before-define': 'off',
    'react/prop-types': 'off',
    'no-catch-shadow': 'off',
    'no-nested-ternary': 'off',
    'prefer-template': 'error',
    'prefer-spread': 'error',
    'prefer-arrow-callback': 'error',
    'no-var': 'error',
    'arrow-spacing': 'error',
    complexity: ['error', {
      max: 15
    }]
  }
};