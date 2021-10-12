/* eslint-disable @typescript-eslint/no-var-requires */
const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-styled-components',
    {
      displayName: true
    }
  ])
);
