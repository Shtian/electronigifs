const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './app/index'
  ],
  output: {
    path: path.resolve(path.join(__dirname, 'static')),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve(path.join(__dirname, 'src'))
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {presets: ['es2015', 'react']}
      }
    ]
  }
};
