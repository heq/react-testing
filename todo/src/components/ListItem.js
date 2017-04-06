var React = require('react');

var ListItem = React.createClass({
    handleToggle: function(e) {
        e.preventDefault();

        this.props.onToggle(this.props.id);
    },
    render: function() {
        var {id, text, completed} = this.props;

        return (
            <div onClick={this.handleToggle} data-id={id}>
                <input ref="showCompleted" onChange={this.props.handleSeach} checked={completed} type="checkbox" />
                <span>{text}</span>
            </div>
        )
    }
});

module.exports = ListItem;
