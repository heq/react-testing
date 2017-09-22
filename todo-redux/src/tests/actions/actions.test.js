var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should exist', () => {
      expect(actions).toExist();
  });

  describe('SET_SEARCH_TEXT', () => {
    it('should generate proper setSearchText action', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'test search string'
      };
      var res = actions.setSearchText(action.searchText);

      expect(res).toEqual(action);
    });
  });
  describe('ADD_TODO', () => {
    it('should generate proper addTodo action', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'test todo string'
      };
      var res = actions.addTodo(action.text);

      expect(res).toEqual(action);
    });
  });
  describe('ADD_TODOS', () => {
    it('should generate addTodos action', () => {
      var testTodos = [
        {
          id: 1,
          text: 'Test 1',
          completed: false,
          createdTimestamp: 9001,
          completedTimestamp: undefined
        }, {
          id: 2,
          text: 'Test 2',
          completed: false,
          createdTimestamp: 9001,
          completedTimestamp: undefined
        }
      ];
      var action = {
        type: 'ADD_TODOS',
        todos: testTodos
      };
      var res = actions.addTodos(testTodos);

      expect(res).toEqual(action);
    });
  });
  describe('TOGGLE_TODO', () => {
    it('should generate proper toggleTodo action', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: 11
      };
      var res = actions.toggleTodo(action.id);

      expect(res).toEqual(action);
    });
  });
  describe('TOGGLE_SHOW_COMPLETED', () => {
    it('should generate proper toggleShowCompleted action', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      var res = actions.toggleShowCompleted();

      expect(res).toEqual(action);
    });
  });
});
