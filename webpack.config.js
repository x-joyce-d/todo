const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const prod = process.env.NODE_ENV === 'production'

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: path.resolve('src/client/index.jsx'),
  output: {
    path: path.resolve('public'),
    filename: `main.js`,
  },
  devtool: prod ? 'none' : 'source-map',
  node: {
    fs: 'empty',
  },
  module: {
    rules: [{
      test: /\.(es|jsx|js)$/i,
      exclude: /node_modules/,
      use: 'babel-loader',
    }, {
      test: /\.p?css$/i,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
      ],
    }, {
       test: /\.(png|jpg|jpeg|gif)$/i,
       use: 'url-loader',
    }]
  },
  plugins: [
     new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  resolve: {
    extensions: ['.es', '.jsx', '.js', '.json'],
  },
}
