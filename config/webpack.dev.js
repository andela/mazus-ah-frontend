/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const merge = require('webpack-merge');
const dotenv = require('dotenv');
const webpack = require('webpack');
const config = require('./webpack.config.js');

const env = dotenv.config().parsed;

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: '../dist',
    quiet: true,
    overlay: true,
    hot: true,
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.EnvironmentPlugin(env),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env),
    }),
  ],
});
