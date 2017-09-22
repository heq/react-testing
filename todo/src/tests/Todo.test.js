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

            var todoItem = todo.state.todos[0];

            expect(todoItem.text).toBe(todoText);
            expect(todoItem.createdTimestamp).toBeA('number');
        });

        it('should toggle completed value when handleToggle is called', () =>  {
            var itemId = 11;
            var todoItem =  {
                id: itemId,
                text: 'test',
                completed: false,
                createdTimestamp: 0,
                completedTimestamp: undefined
            };
            var todo = TestUtils.renderIntoDocument(<Todo />);
            todo.setState({
                todos: [todoItem]
            });
            var todoItem = todo.state.todos[0];

            expect(todoItem.completed).toBe(false);
            todo.handleListItemToggle(itemId);

            expect(todoItem.completed).toBe(true);
            expect(todoItem.completedTimestamp).toBeA('number');
        });

        it('should set completedTimestamp as undefined when completed toggled back to uncomplited', () =>  {
            var itemId = 13;
            var todoItem =  {
                id: itemId,
                text: 'test',
                completed: true,
                createdTimestamp: 0,
                completedTimestamp: 1337
            };
            var todo = TestUtils.renderIntoDocument(<Todo />);
            todo.setState({
                todos: [todoItem]
            });
            var todoItem = todo.state.todos[0];

            expect(todoItem.completed).toBe(true);
            todo.handleListItemToggle(itemId);

            expect(todoItem.completed).toBe(false);
            expect(todoItem.completedTimestamp).toBeA('undefined');
        });
    });
});
