const path = require('path');
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
});
