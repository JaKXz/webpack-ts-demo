'use strict';

const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const distPath = path.resolve(__dirname, '..', 'dist');

module.exports = function (context) {
  let plugins = [
    new htmlWebpackPlugin({
      template: path.join(__dirname, '..', 'index.html'),
      inject: 'body',
      minify: false
    })
  ];

  if (context === 'prod') {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
  }

  return {
    devtool: 'eval-source-map',
    debug: true,
    cache: true,
    verbose: true,
    displayErrorDetails: true,
    stats: {
      colors: true,
      reasons: true
    },

    entry: {
      app: './client/app.ts'
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
        { test: /\.tsx?$/, loader: 'tslint' }
      ],
      loaders: [
        { test: /\.ts$/, loaders: ['ng-annotate', 'ts'] },
        { test: /\.jade$/, loader: 'jade' },
        { test: /\.html$/, loader: 'raw' },
        { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap' },
        { test: /\.svg/, loader: 'url' },
        { test: /\.eot/, loader: 'url' },
        { test: /\.woff/, loader: 'url' },
        { test: /\.woff2/, loader: 'url' },
        { test: /\.ttf/, loader: 'url' },
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
