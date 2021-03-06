var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfing = new 
HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html'
  inject: 'body'
});

module.exports = {
  entry: __dirname + '/app/myapp.js'
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/
        loader: 'babel-loader'
      }
     ]
    },
    output: {
      filename: 'tranformed.js',
      path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPluginConfig]
};

var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

ReactDOM.render(
   <App />
   document.getElementById('app')
);
