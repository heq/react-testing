var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Todo = require('Todo');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

store.subscribe(() => {
  var state = store.getState();
  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!sass!applicationStyles');
$(document).foundation();

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('app')
);
