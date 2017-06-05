'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './lib/js/frontend/src/ocaml/main.js',
  output: {
    filename: 'bundle.min.js'
  },
  resolve: {
    root: [
      path.resolve('./lib/js/frontend/src/ocaml'),
      path.resolve('./node_modules')
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
