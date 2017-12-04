const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, './../'),
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'app'),
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader'
    }, {
      test: /\.css$/,
      loader: 'css-loader',
      query: {
        modules: true
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      filename: path.resolve(__dirname, './../index.html')
    })
  ]
};

module.exports = config;