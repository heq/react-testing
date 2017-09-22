var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should dispatch ADD_TODO action with valid input', () => {
        var todoText = 'Check mail';
        var action = {
          type: 'ADD_TODO',
          text: todoText
        };
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.textInput.value = todoText;
        TestUtils.Simulate.submit($el[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO with invalid input', () => {
        var todoText = '';
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.textInput.value = todoText;
        TestUtils.Simulate.submit($el[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
