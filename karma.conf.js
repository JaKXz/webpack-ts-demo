const loaders = require('./webpack/loaders');

module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai', 'sinon'],

    files: ['client/**/*.spec.ts'],

    preprocessors: {
      'client/**/*.ts': [
        'webpack',
        'sourcemap',
        'coverage'
      ]
    },

    webpack: {
      verbose: true,
      devtool: 'source-map',
      resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
      },
      module: {
        preLoaders: [
          loaders.tslint
        ],
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

    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      reporters: [
        { type: 'json' },
        { type: 'html' },
        { type: 'text-summary' }
      ],
      dir: './coverage'
    },

    port: 9999,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['Chrome'], // Alternatively: 'PhantomJS'

    captureTimeout: 6000,

    singleRun: true
  });
};
