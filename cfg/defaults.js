'use strict';
const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function getDefaultModules() {
  return {
    preLoaders: [{
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader'
      }],
    loaders: [
      {
        test: /\.css$/,
        //loader: 'style-loader!css-loader!postcss-loader'
        loader: 'style-loader!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:8]!postcss')
        //loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }
    ]
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules: getDefaultModules,
};
