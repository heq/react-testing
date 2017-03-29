var React = require('react');
var Clock = require('Clock');
var InputForm = require('InputForm');

var STATE = {
    STOPPED: 'stopped',
    STARTED: 'started',
    PAUSED: 'paused'
}

var Countdown = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            countdownStatus: STATE.STOPPED
        };
    },
    componentDidUpdate: function (prevProps, prevState) {
        var currentStatus = this.state.countdownStatus;

        if (currentStatus !== prevState.countdownStatus) {
            switch (currentStatus) {
                case STATE.STARTED:
                    this.startTimer();
                    break;
            }
        }
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;

            if (newCount < 0) return;
            this.setState({
                count: newCount
            });
        }, 1000);
    },
    handleSetCountdown: function (seconds) {
        this.setState({
            count: seconds,
            countdownStatus: STATE.STARTED
        });
    },
    render: function() {
        var {count} = this.state;
        return (
            <div>
                <Clock totalSeconds={count}/>
                <InputForm submitFunction={this.handleSetCountdown}/>
            </div>
        );
    }
});

module.exports = Countdown;
