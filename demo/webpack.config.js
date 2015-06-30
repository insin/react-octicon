'use strict'

var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: './demo.js',
  externals: {
    'react': 'React'
  },
  output: {
    path: __dirname + '/dist/',
    filename: 'demo.js'
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?-restructuring!autoprefixer')},
      {test: /\.(otf|eot|svg|ttf|woff|woff2).*$/, loader: 'url?limit=8192'}
    ]
  }
}
