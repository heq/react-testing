var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import List from 'List';
import AddTodo from 'AddTodo';
import Search from 'Search';

var Todo = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="page-title">Todo</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <Search />
              <List />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Todo;
