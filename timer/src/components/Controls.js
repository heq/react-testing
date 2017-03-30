var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChange: function(newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        };
    },
    render: function() {
        var {countdownStatus} = this.props;

        var renderStartStopButton = () => {
            if (countdownStatus === 'STARTED') {
                return <button className="button secondary" type="button" onClick={this.onStatusChange('PAUSED')}>Pause</button>
            } else if (countdownStatus === 'PAUSED') {
                return <button className="button primary" type="button" onClick={this.onStatusChange('STARTED')}>Start</button>
            }
        }

        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert" type="button" onClick={this.onStatusChange('STOPPED')}>Clear</button>
            </div>
        );
    }
});

module.exports = Controls;
