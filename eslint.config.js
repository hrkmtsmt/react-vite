/** @typedef { import("eslint").Linter.FlatConfig } FlatConfig */

import eslintPluginFunctional from 'eslint-plugin-functional';
import eslintConfigStandardWithTypescript from 'eslint-config-standard-with-typescript';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';

/** @type FlatConfig */
const eslintConfig = {
  ignores: ['./dist'],
  plugins: {
    functional: eslintPluginFunctional,
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-use-before-define': 'error',
    'no-restricted-globals': ['error', { name: 'isFinite' }, { name: 'isNaN' }],
    'functional/no-let': ['error', { allowInForLoopInit: false, allowInFunctions: false }],
    'functional/immutable-data': [
      'error',
      { ignoreImmediateMutation: true, ignoreClasses: true, ignoreAccessorPattern: ['draft*.*'] },
    ],
  },
};

/** @type FlatConfig */
const typescriptConfig = {
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: {
    parser: typescriptEslintParser,
    parserOptions: {
      project: ['./tsconfig.json', './tsconfig.node.json'],
    },
  },
  plugins: {
    '@typescript-eslint': typescriptEslint,
  },
  rules: {
    ...typescriptEslint.configs.recommended.rules,
    ...eslintConfigStandardWithTypescript.rules,
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: { delimiter: 'comma', requireLast: true },
        singleline: { delimiter: 'comma', requireLast: false },
        overrides: {
          interface: { multiline: { delimiter: 'semi', requireLast: true } },
          typeLiteral: { multiline: { delimiter: 'semi', requireLast: true } },
        },
      },
    ],
  },
};

/** @type FlatConfig */
const reactConfig = {
  files: ['**/*.ts', '**/*.tsx'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
      typescript: {},
    },
  },
  plugins: {
    react: eslintPluginReact,
    'react-hooks': eslintPluginReactHooks,
  },
  rules: {
    ...eslintPluginReactHooks.configs.recommended.rules,
    ...eslintPluginReact.configs.recommended.rules,
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
    'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary', 'coerce'] }],
  },
};

/** @type Array<FlatConfig> */
export default [eslintConfig, typescriptConfig, reactConfig];
