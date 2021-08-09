module.exports = {
  root: true,
  extends: [],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'sort-imports-es6-autofix'],
  ignorePatterns: ['lib/*'],
  rules: {
    'prettier/prettier': 'error',
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },
};
