var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('.setTodos()', () => {
        it('should set valid todos array', () => {
            var todos = [{
                id: 10,
                test: 'test text',
                completed: false
            }];
            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toEqual(todos);
        });
        it('should set not invalid todos array', () => {
            var badTodos = {
                a: 'b'
            };
            TodoAPI.setTodos(badTodos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toBe(null);
        });
    });

    describe('.getTodos()', () => {
        it('should return empty array for bad localStorage data', () => {
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });
        it('should return todos array if valid data in localStorage', () => {
            var todos = [{
                id: 10,
                test: 'test text',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));
            var actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos);
        });
    });
    describe('.filterTodos()', () => {
        var todos = [
            {
                id: 1,
                text: 'Feed cat',
                completed: true
            },
            {
                id: 2,
                text: 'Buy mirror',
                completed: false
            },
            {
                id: 3,
                text: 'Buy food',
                completed: true
            }
        ];
        it('should return all items when showCompleted is true', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });
        it('should return done items when showCompleted is false', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');

            expect(filteredTodos.length).toBe(1);
        });
        it('should sort by completed status', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos[0].completed).toBe(false);
        });
        it('should return all items when filter is "" (empty)', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });
        it('should return all items with "Buy" when showCompleted is true and filter is "Buy"', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'Buy');

            filteredTodos.forEach((todoItem) => {
                expect(todoItem.text.toLowerCase()).toInclude('buy');
            });

            expect(filteredTodos.length).toBe(2);
        });
        it('should return done items with "Buy" when showCompleted is false and filter is "Buy"', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, 'Buy');

            filteredTodos.forEach((todoItem) => {
                expect(todoItem.text.toLowerCase()).toInclude('buy');
            });

            expect(filteredTodos.length).toBe(1);
        });
    });
});
