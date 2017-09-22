var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var configureStore = require('configureStore');
var Todo = require('Todo');
import List from 'List';

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should render List', () => {
      var store = configureStore.configure();
      var provider = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <Todo />
        </Provider>
      );

      var todoApp = TestUtils.scryRenderedComponentsWithType(provider, Todo)[0];
      var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, List);

      expect(todoList.length).toEqual(1);
    });
});
