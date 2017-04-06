var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var ListItem = require('ListItem');

describe('ListItem', () => {
    it('should exist', () => {
        expect(ListItem).toExist();
    });

    it('should call onToggle prop with id on click', () => {
        var itemId = 99;
        var todoItem = {
            id: itemId,
            text: 'test',
            completed: true
        };
        var spy = expect.createSpy();
        var listItem = TestUtils.renderIntoDocument(<ListItem {...todoItem} onToggle={spy} />);
        var $el = $(ReactDOM.findDOMNode(listItem));

        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(itemId);
    });
});
