var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var {ListItem} = require('ListItem');

describe('ListItem', () => {
    it('should exist', () => {
        expect(ListItem).toExist();
    });

    it('should dispatch TOGGLE_TODO action on click', () => {
        var todoItem = {
            id: 99,
            text: 'test',
            completed: true
        };
        var spy = expect.createSpy();
        var listItem = TestUtils.renderIntoDocument(<ListItem {...todoItem} dispatch={spy} />);
        var $el = $(ReactDOM.findDOMNode(listItem));

        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith({
          type: 'TOGGLE_TODO',
          id: todoItem.id
        });
    });
});
