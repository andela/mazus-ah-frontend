const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const inDevelopment = process.env.NODE_ENV !== 'production';
const htmlTitle = process.env.HTML_TITLE || 'Authors\' haven';

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.join(__dirname, '..', '/dist'),
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader', // 3. Inject styles into DOM
          'css-loader', // 2. Turns css into commonjs
          'sass-loader', // 1. Turns sass into css
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, '../src/'),
      '@Redux': path.resolve(__dirname, '../src/redux/'),
      '@Common': path.resolve(__dirname, '../src/components/common/'),
      '@Utils': path.resolve(__dirname, '../utils/'),
    },
  },
  node: {
    fs: 'empty',
  },
  plugins: [
    new CleanWebpackPlugin(
      ['dist'],
      {
        root: process.cwd(),
      },
    ),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: htmlTitle,
    }),
    new MiniCssExtractPlugin({
      filename: inDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: inDevelopment ? '[id].css' : '[id].[hash].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Your application is running on http://localhost:8080'],
      },
    }),
  ],
};
