var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    describe('.componentDidUpdate()', () => {
        it('should start timer on STARTED state', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer />);

            timer.handleStatusChange('STARTED');
            expect(timer.state.count).toBe(0);

            setTimeout(() => {
                expect(timer.state.timerStatus).toBe('STARTED');
                expect(timer.state.count).toBe(1);
                done();
            }, 1001);
        });

        it('should pause timer on PAUSED state', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer />);

            timer.setState({
                count: 10
            });
            timer.handleStatusChange('STARTED');
            timer.handleStatusChange('PAUSED');

            setTimeout(() => {
                expect(timer.state.timerStatus).toBe('PAUSED');
                expect(timer.state.count).toBe(10);
                done();
            }, 1001);
        });

        it('should clear timer on STOPPED state', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer />);

            timer.setState({
                count: 10
            });
            timer.handleStatusChange('STARTED');
            timer.handleStatusChange('STOPPED');

            setTimeout(() => {
                expect(timer.state.timerStatus).toBe('STOPPED');
                expect(timer.state.count).toBe(0);
                done();
            }, 1001);
        });
    });
});
