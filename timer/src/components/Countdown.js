var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');
var InputForm = require('InputForm');

var Countdown = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            countdownStatus: "STOPPED"
        };
    },
    componentDidUpdate: function (prevProps, prevState) {
        var currentStatus = this.state.countdownStatus;

        if (currentStatus !== prevState.countdownStatus) {
            switch (currentStatus) {
                case "STARTED":
                    this.startTimer();
                    break;
                case "STOPPED":
                    this.setState({
                        count: 0
                    });
                case "PAUSED":
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUnmount: function () {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;

            if (newCount <= 0) {
                this.setState({
                    countdownStatus: "STOPPED"
                });
            } else {
                this.setState({
                    count: newCount
                });
            }
        }, 1000);
    },
    handleSetCountdown: function (seconds) {
        this.setState({
            count: seconds,
            countdownStatus: "STARTED"
        });
    },
    handleStatusChange: function (newStatus) {
        this.setState({
            countdownStatus: newStatus
        });
    },
    render: function() {
        var {count, countdownStatus} = this.state;

        var renderControlArea = () => {
            if (countdownStatus !== 'STOPPED') {
                return <Controls clockStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
            } else {
                return <InputForm onSetCountdown={this.handleSetCountdown} />
            }
        }

        return (
            <div>
                <h1 className="page-title">Countdown</h1>
                <Clock totalSeconds={count} />
                {renderControlArea()}
            </div>
        );
    }
});

module.exports = Countdown;
