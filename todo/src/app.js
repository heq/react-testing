var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Todo = require('Todo');

require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!sass!applicationStyles');
$(document).foundation();

ReactDOM.render(
    <Todo />,
    document.getElementById('app')
);
