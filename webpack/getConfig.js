'use strict';

const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const distPath = path.resolve(__dirname, '..', 'dist');
const loaders = require('./loaders');

module.exports = function (context) {
  context = context || 'dev';
  const production = context === 'prod';
  let plugins = [
    new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].bundle.js'),
    new htmlWebpackPlugin({
      template: path.join(__dirname, '..', 'index.html'),
      inject: 'body',
      minify: false
    })
  ];

  if (production) {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
  }

  return {
    devtool: 'inline-source-map',
    debug: !production,
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
      path: distPath,
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
      ],
      postLoaders: [
        loaders.istanbulInstrumenter
      ]
    },

    devServer: {
      inline: true,
      colors: true,
      contentBase: distPath,
      publicPath: '/'
    },

    plugins: plugins
  };
};
