var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var InputForm = require('InputForm');

describe('InputForm', () => {
    it('should exist', () => {
        expect(InputForm).toExist();
    });

    describe('.onSetCountdown()', () => {
        it('should be called when input is valid', () => {
            var spy = expect.createSpy();
            var countdownForm = TestUtils.renderIntoDocument(<InputForm submitFunction={spy}/>);
            var $el = $(ReactDOM.findDOMNode(countdownForm));

            countdownForm.refs.secondsInput.value = '109';
            TestUtils.Simulate.submit($el[0]);

            expect(spy).toHaveBeenCalledWith(109);
        });
        it('should not be called when input is invalid', () => {
            var spy = expect.createSpy();
            var countdownForm = TestUtils.renderIntoDocument(<InputForm submitFunction={spy}/>);
            var $el = $(ReactDOM.findDOMNode(countdownForm));

            countdownForm.refs.secondsInput.value = '109asd';
            TestUtils.Simulate.submit($el[0]);

            expect(spy).toNotHaveBeenCalled();
        });
    });
});
