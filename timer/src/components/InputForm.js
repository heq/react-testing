var React = require('react');

var InputForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var inputString = this.refs.secondsInput.value;
        this.refs.secondsInput.value = '';

        if (/^\d+$/g.test(inputString)) {
            var inputNumber = parseInt(inputString, 10);
            if (inputNumber <= 0) return;
            this.props.submitFunction(inputNumber);
        }
    },
    render: function() {
        return (
            <form ref="form" onSubmit={this.onFormSubmit}>
                <input ref="secondsInput" type="search" placeholder="Enter seconds" />
                <button className="button expanded" type="submit">Set countdown</button>
            </form>
        );
    }
});

module.exports = InputForm;
