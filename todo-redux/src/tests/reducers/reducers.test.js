var expect = require('expect');
var reducers = require('reducers');
// df is for checking that values passed as arguments (state, action) are not
// modified as reducers are pure functions
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  it('should exist', () => {
      expect(reducers).toExist();
  });

  describe('searchTextReducer', () => {
    it('should exist', () => {
        expect(reducers.searchTextReducer).toExist();
    });
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'test search string'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });
  describe('showCompletedReducer', () => {
    it('should exist', () => {
        expect(reducers.showCompletedReducer).toExist();
    });
    it('should flip the showCompleted value', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });
  describe('todosReducer', () => {
    it('should exist', () => {
        expect(reducers.todoReducer).toExist();
    });
    describe('ADD_TODO', () => {
      it('should add new todo', () => {
        var action = {
          type: 'ADD_TODO',
          text: 'test todo'
        };
        var res = reducers.todoReducer(df([]), df(action));

        expect(res.length).toEqual(1);
        expect(res[0].text).toEqual(action.text);
      });
    });
    describe('TOGGLE_TODO', () => {
      it('should toggle selected todo completed value', () => {
        var testTodos = [{
            id: 1,
            text: 'test todo',
            completed: true,
            createdTimestamp: 9001,
            completedTimestamp: 9002
        }];
        var action = {
          type: 'TOGGLE_TODO',
          id: 1
        };
        var res = reducers.todoReducer(df(testTodos), df(action));

        expect(res[0].completed).toEqual(false);
        expect(res[0].completedTimestamp).toEqual(undefined);
      });
    });
    describe('ADD_TODOS', () => {
      it('should add existing todos from local storage', () => {
        var testTodos = [{
            id: 1,
            text: 'test todo',
            completed: true,
            createdTimestamp: 9001,
            completedTimestamp: 9002
        }];
        var action = {
          type: 'ADD_TODOS',
          todos: testTodos
        };
        var res = reducers.todoReducer(df([]), df(action));

        expect(res.length).toEqual(1);
        expect(res[0]).toEqual(testTodos[0]);
      });
    });
  });
});
