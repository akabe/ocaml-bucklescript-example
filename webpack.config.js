'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './lib/js/frontend/src/ocaml/main.js'
  },
  output: {
    filename: '[name].min.js'
  },
  resolve: {
    root: [
      path.resolve('./lib/js/frontend/src/ocaml'),
      path.resolve('./node_modules')
    ],
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
