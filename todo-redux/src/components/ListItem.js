var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var ListItem = React.createClass({
  render: function() {
    // connect() gives dispatch into this.props
    var {
      id,
      text,
      completed,
      createdTimestamp,
      completedTimestamp,
      dispatch
    } = this.props;

    var renderDate = () => {
      var message;

      if (completed) {
        message = 'Completed ' + moment.unix(completedTimestamp).format('DD.MM.YYYY HH:mm');
      } else {
        message = 'Created ' + moment.unix(createdTimestamp).format('DD.MM.YYYY HH:mm');
      }
      return message;
    };
    var statusClass = completed
      ? 'is-completed'
      : 'not-completed';

    return (
      <div data-id={id} className={"list-item " + statusClass} onClick={() => {
        dispatch(actions.toggleTodo(id));
      }}>
        <input ref="showCompleted" onChange={this.props.handleSeach} checked={completed} type="checkbox"/>
        <p className="main-text">{text}</p>
        <p className="sub-text">{renderDate()}</p>
      </div>
    )
  }
});

export default connect()(ListItem);
