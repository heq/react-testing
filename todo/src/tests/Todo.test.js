var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Todo = require('Todo');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    describe('.handleAddTodo()', () => {
        it('should add todo into state.todos', () => {
            var todoText = 'test';
            var todo = TestUtils.renderIntoDocument(<Todo />);

            todo.setState({
                todos: []
            });
            todo.addItem(todoText);

            expect(todo.state.todos[0].text).toBe(todoText);
        });

        it('should toggle completed value when handleToggle is called', () =>  {
            var itemId = 11;
            var todoItem =  {
                id: itemId,
                text: 'test',
                completed: false
            };
            var todo = TestUtils.renderIntoDocument(<Todo />);
            todo.setState({
                todos: [todoItem]
            });

            expect(todo.state.todos[0].completed).toBe(false);
            todo.handleListItemToggle(itemId);
            expect(todo.state.todos[0].completed).toBe(true);
        });
    });
});
