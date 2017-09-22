var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    var {dispatch} = this.props;
    var inputString = this.refs.textInput.value;
    this.refs.textInput.value = '';

    if (typeof inputString === "string" && inputString.length > 0) {
      dispatch(actions.addTodo(inputString));
    }
    this.refs.textInput.focus();
  },
  render: function() {
    return (
      <form ref="form" onSubmit={this.handleSubmit} className="container__footer">
        <input ref="textInput" type="text" placeholder="Enter todo"/>
        <button className="button expanded" type="submit">Add todo</button>
      </form>
    );
  }
});

export default connect()(AddTodo);
