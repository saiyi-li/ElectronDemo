const path = require('path');
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
//const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development'

var options = webpackMerge(commonConfig(), {

  // Sourcemap without column-mappings
  devtool: 'cheap-module-source-map',

  output: {
    path: path.join(__dirname, '../', 'build'),
    // publicPath: 'build/',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
})

module.exports = options;
