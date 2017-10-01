/* eslint strict: 0 */
'use strict';

const path = require('path');
const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
//var argv = require('minimist')(process.argv.slice(2));
//const isWeb = (argv && argv.t === 'web');
//const output = (isWeb ? 'build/web' : 'build/electron');

let options ={
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: [],
      exclude: /node_modules/,
    }]
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: path.join(__dirname, 'src'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    mainFields: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'],
  },
  entry: [
    './src/index',
  ]

};

options.target = webpackTargetElectronRenderer(options);

module.exports = options;