var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onAddTodo prop with valid input', () => {
        var todoText = 'Check mail';
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddItem={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.textInput.value = todoText;
        TestUtils.Simulate.submit($el[0]);

        expect(spy).toHaveBeenCalledWith(todoText);
    });

    it('should not call onAddTodo prop with invalid inpu', () => {
        var todoText = '';
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddItem={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.textInput.value = todoText;
        TestUtils.Simulate.submit($el[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
