/* eslint-disable import/no-extraneous-dependencies */
const dotenv = require('dotenv');
const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = require('./webpack.config.js');

const env = dotenv.config().parsed;

module.exports = merge(config, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(env),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env),
    }),
  ],
});
