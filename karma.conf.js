const loaders = require('./webpack/loaders');

module.exports = function (config) {
  config.set({
    frameworks: [
      'mocha',
      'chai',
      'sinon',
      'sinon-chai',
      'chai-things',
      'chai-as-promised'
    ],

    files: ['client/**/*.spec.ts'],

    preprocessors: {
      'client/**/*.ts': [
        'webpack',
        'sourcemap'
      ]
    },

    webpack: {
      verbose: true,
      devtool: 'inline-source-map',
      resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
      },
      module: {
        loaders: [
          loaders.typescriptTest,
          loaders.jade,
          loaders.html
        ],
        postLoaders: [
          loaders.istanbulInstrumenter
        ]
      },
      stats: {
        colors: true,
        reasons: true
      },
      debug: true
    },

    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
    },

    reporters: ['mocha'],

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['Chrome'], // Alternatively: 'PhantomJS'

    captureTimeout: 6000,

    singleRun: true
  });
};
