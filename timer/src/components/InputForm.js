var React = require('react');

var InputForm = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();

        var inputString = this.refs.secondsInput.value;
        this.refs.secondsInput.value = '';

        if (/^\d+$/g.test(inputString)) {
            var inputNumber = parseInt(inputString, 10);
            if (inputNumber <= 0) return;
            this.props.onSetCountdown(inputNumber);
        }
    },
    render: function() {
        return (
            <form ref="form" onSubmit={this.onSubmit}>
                <input ref="secondsInput" type="search" placeholder="Enter seconds" />
                <button className="button expanded" type="submit">Set countdown</button>
            </form>
        );
    }
});

module.exports = InputForm;
