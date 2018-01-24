module.exports = {
  entry: __dirname + '/app/myapp.js'
};
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

ReactDOM.render(
   <App />
   document.getElementById('app')
);
