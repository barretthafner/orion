var path = require('path')
var webpack = require('webpack');
var packageData = require('./package.json');
var filename = ['app', 'js'];

module.exports = {
  entry: [path.resolve(__dirname, packageData.clientMain)],
  output: {
    filename: filename.join('.')
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
