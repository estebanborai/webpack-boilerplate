'use strict';

const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const helpers = require('./helpers');
const isDev = process.env.NODE_ENV === 'development';

const config = {
  entry: {
    polyfill: '@babel/polyfill',
    main: helpers.root('src', 'main')
  },
  resolve: {
    extensions: [
      '.js',
      '.ts'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)/,
        loader: 'babel-loader',
        include: [
          helpers.root('src')
        ]
      },
      {
        test: /\.css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev
            }
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: 'public/index.ejs',
      chunksSortMode: 'dependency'
    })
  ]
};

module.exports = config;
