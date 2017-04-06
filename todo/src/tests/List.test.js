var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var List = require('List');
var ListItem = require('ListItem');

describe('List', () => {
    it('should exist', () => {
        expect(List).toExist();
    });

    it('should render one Todo component for each list item', () => {
        var todos = [
            {
                id: 1,
                text: 'Test 1'
            },
            {
                id: 2,
                text: 'Test 2'
            }
        ];
        var todoList = TestUtils.renderIntoDocument(<List listItems={todos}/>);
        var listItemComponents = TestUtils.scryRenderedComponentsWithType(todoList, ListItem);

        expect(listItemComponents.length).toBe(todos.length);
    });
});
