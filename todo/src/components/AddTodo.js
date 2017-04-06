var React = require('react');

var AddTodo = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();

        var inputString = this.refs.textInput.value;
        this.refs.textInput.value = '';

        if (typeof inputString === "string" && inputString.length > 0) {
            this.props.handleAddItem(inputString);
        }
        this.refs.textInput.focus();
    },
    render: function() {
        return (
            <form ref="form" onSubmit={this.handleSubmit}>
                <input ref="textInput" type="text" placeholder="Enter todo" />
                <button className="button expanded" type="submit">Add todo</button>
            </form>
        );
    }
});

module.exports = AddTodo;
