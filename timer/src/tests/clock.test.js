var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Clock = require('Clock');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });

    describe('.render()', () => {
        it('should render clock to output', () => {
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
            var $el = $(ReactDOM.findDOMNode(clock));
            var actual = $el.find('.clock-text').text();
            var expected = '01:02';

            expect(actual).toBe(expected);

        });
    });
    describe('.formatTime()', () => {
        it('should format seconds to mm:ss', () => {
            var clock = TestUtils.renderIntoDocument(<Clock />);
            var seconds = 615;
            var expected = '10:15'
            var actual = clock.formatTime(seconds);

            expect(actual).toBe(expected);
        });
        it('should add leading zero if seconds/minutes less han 10', () => {
            var clock = TestUtils.renderIntoDocument(<Clock />);
            var seconds = 61;
            var expected = '01:01'
            var actual = clock.formatTime(seconds);

            expect(actual).toBe(expected);
        });
    });
});
