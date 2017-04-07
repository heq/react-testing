var $ = require('jQuery');

module.exports = {
    setTodos: function (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function () {
        var todosString = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(todosString);
        } catch (e) {
            console.log('Cannot parse todos from localStorage.', e);
        }

        return $.isArray(todos) ? todos : [];
    },
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // filter by completed status
        filteredTodos = filteredTodos.filter((todoItem) => {
            return !todoItem.completed || showCompleted;
        });

        // filter by searchText
        if (searchText.length > 0) {
            filteredTodos = filteredTodos.filter((todoItem) => {
                var text = todoItem.text.toLowerCase();
                var string = searchText.toLowerCase();

                return (text.indexOf(string) >= 0);
            });
        }

        // sort by completed status
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTodos;
    }
};
