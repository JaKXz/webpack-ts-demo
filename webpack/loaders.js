exports.typescript = {
  test: /\.ts$/,
  loaders: ['ng-annotate', 'ts'],
  exclude: /\.spec\.ts$/
};

exports.jade = {
  test: /\.jade$/,
  loader: 'jade'
};

exports.html = {
  test: /\.html$/,
  loader: 'raw'
};

exports.css = {
  test: /\.css$/,
  loader: 'style-loader!css-loader?sourceMap'
};

exports.svg = {
  test: /\.svg$/,
  loader: 'url'
};

exports.eot = {
  test: /\.eot$/,
  loader: 'url'
};

exports.woff = {
  test: /\.woff$/,
  loader: 'url'
};

exports.woff2 = {
  test: /\.woff2$/,
  loader: 'url'
};

exports.ttf = {
  test: /\.ttf$/,
  loader: 'url'
};

exports.tslint = {
  test: /\.tsx?$/,
  loader: 'tslint'
};

exports.istanbulInstrumenter = {
  test: /\.ts$/,
  loader: 'istanbul-instrumenter',
  exclude: /(node_modules\/|\.spec\.ts$)/
};
