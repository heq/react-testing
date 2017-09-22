var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

import {configure} from 'configureStore';
import ConnectedList, {List} from 'List';
import ConnectedListItem, {ListItem} from 'ListItem';

describe('List', () => {
  it('should exist', () => {
    expect(List).toExist();
  });

  it('should render one Todo component for each list item', () => {
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
    var store = configure({
      todos: testTodos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedList />
      </Provider>
    );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedList)[0];
    var listItemComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedListItem);

    expect(listItemComponents.length).toBe(testTodos.length);
  });

  it('should render empty message if no todos', () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<List todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
