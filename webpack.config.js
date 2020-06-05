const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: './app/app.js'
  },
  output: {
    path: path.resolve('dist'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      filename: 'index.html',
      minify: true,
      hash: true,
      base: '/'
    })
  ],
  mode: 'development'
};
