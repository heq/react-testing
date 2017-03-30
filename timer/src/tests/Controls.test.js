var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('.render()', () => {
        it('should render "Pause" button when state is STARTED', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="STARTED"/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1);
        });
        it('should render "Start" button when state is PAUSED', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="PAUSED"/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $startButton = $el.find('button:contains(Start)');

            expect($startButton.length).toBe(1);
        });
    });

});
