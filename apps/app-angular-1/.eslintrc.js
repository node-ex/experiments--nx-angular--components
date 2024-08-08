'use strict';

module.exports = {
  extends: ['../../.eslintrc.js'],
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.ts'],
      // We set parserOptions.project for the project to allow TypeScript to create the type-checker behind the scenes when we run linting
      // https://nx.dev/recipes/tips-n-tricks/eslint
      parserOptions: {
        project: ['apps/app-angular-1/tsconfig.*?.json'],
      },
      extends: [
        // https://github.com/nrwl/nx/blob/master/packages/eslint-plugin/src/configs/angular.ts
        'plugin:@nx/angular',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        // https://github.com/nrwl/nx/blob/master/packages/eslint-plugin/src/configs/typescript.ts
        'plugin:@nx/typescript',
      ],
      rules: {
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase',
          },
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case',
          },
        ],
        '@typescript-eslint/no-extraneous-class': 'off',
      },
    },
    {
      files: ['*.html'],
      extends: [
        // https://github.com/nrwl/nx/blob/master/packages/eslint-plugin/src/configs/angular-template.ts
        'plugin:@nx/angular-template'
      ],
      rules: {},
    },
  ],
};
