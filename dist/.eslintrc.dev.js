"use strict";

module.exports = {
  "extends": ['airbnb', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    'no-console': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': 'off',
    // disable if necessary
    'react/static-property-placement': 'off',
    // disable if necessary
    'react/jsx-props-no-spreading': 'off',
    // disable if necessary
    'react/require-default-props': 'off'
  },
  parser: 'babel-eslint'
};