'use strict';

const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const loaders = require('./loaders');

module.exports = function (context) {
  context = context || 'dev';
  const isProduction = context === 'production';
  const distAbsolutePath = path.resolve(__dirname, '..', 'dist');

  let plugins = [
    new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].bundle.js'),
    new htmlWebpackPlugin({
      template: path.join(__dirname, '..', 'index.html'),
      inject: 'body',
      minify: isProduction
    })
  ];

  if (isProduction) {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
  }

  return {
    devtool: 'inline-source-map',
    debug: !isProduction,
    cache: true,
    verbose: true,
    displayErrorDetails: true,
    stats: {
      colors: true,
      reasons: true
    },

    entry: {
      app: './client/app.ts',
      vendor: [
        'angular',
        'angular-ui-router'
      ]
    },

    output: {
      path: distAbsolutePath,
      filename: '[name].[hash].bundle.js',
      publicPath: '/',
      sourceMapFilename: '[name].[hash].bundle.js.map',
      chunkFilename: '[id].chunk.js'
    },

    resolve: {
      modulesDirectories: ['node_modules'],
      extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },

    module: {
      preLoaders: [
        loaders.tslint
      ],
      loaders: [
        loaders.typescript,
        loaders.jade,
        loaders.html,
        loaders.css,
        loaders.svg,
        loaders.eot,
        loaders.woff,
        loaders.woff2,
        loaders.ttf
      ]
    },

    devServer: {
      inline: true,
      colors: true,
      contentBase: distAbsolutePath,
      publicPath: '/'
    },

    plugins: plugins
  };
};
