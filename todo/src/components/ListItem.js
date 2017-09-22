var React = require('react');
var moment = require('moment');

var ListItem = React.createClass({
    handleToggle: function(e) {
        e.preventDefault();

        this.props.onToggle(this.props.id);
    },
    render: function() {
        var {id, text, completed, createdTimestamp, completedTimestamp} = this.props;
        var renderDate = () => {
            var message;

            if (completed) {
                message = 'Completed ' + moment.unix(completedTimestamp).format('DD.MM.YYYY HH:mm');
            } else {
                message = 'Created ' + moment.unix(createdTimestamp).format('DD.MM.YYYY HH:mm');
            }
            return message;
        };
        var statusClass = completed ? 'is-completed' : 'not-completed';

        return (
            <div onClick={this.handleToggle} data-id={id} className={"list-item " + statusClass} >
                <input ref="showCompleted" onChange={this.props.handleSeach} checked={completed} type="checkbox" />
                <p className="main-text">{text}</p>
                <p className="sub-text">{renderDate()}</p>
            </div>
        )
    }
});

module.exports = ListItem;
