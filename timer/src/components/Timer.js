var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            timerStatus: "STOPPED"
        };
    },
    componentWillUnmount: function () {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 1000);
    },
    handleStatusChange: function (newStatus) {
        this.setState({
            timerStatus: newStatus
        });
    },
    componentDidUpdate: function (prevProps, prevState) {
        var currentStatus = this.state.timerStatus;

        if (currentStatus !== prevState.timerStatus) {
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
    render: function () {
        var {count, timerStatus} = this.state;

        return (
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count} />
                <Controls clockStatus={timerStatus} onStatusChange={this.handleStatusChange} />
            </div>
        );
    }
});

module.exports = Timer;
