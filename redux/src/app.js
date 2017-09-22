var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');

require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!sass!applicationStyles');
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>

        </Route>
    </Router>,
    document.getElementById('app')
);

require('./redux-example.js');
// require('./redux-todo-example.js');
