var React = require('react');
var uuid = require('node-uuid');

var List = require('List');
var AddTodo = require('AddTodo');
var Search = require('Search');
var TodoAPI = require('TodoAPI');

var Todo = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        };
    },
    componentDidUpdate: function() {
        TodoAPI.setTodos(this.state.todos);
    },
    addItem: function (text) {
        var newItem = {
            id: uuid(),
            text: text,
            completed: false
        };

        this.setState({
            todos: [
                ...this.state.todos,
                newItem
            ]
        });
    },
    handleListItemToggle: function (id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        this.setState({
            todos: updatedTodos
        });
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function () {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return (
            <div>
                <h1>Todo</h1>
                <Search onSearch={this.handleSearch} />
                <List listItems={filteredTodos} onToggle={this.handleListItemToggle} />
                <AddTodo handleAddItem={this.addItem} />
            </div>
        )
    }
});

module.exports = Todo;
