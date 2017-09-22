var React = require('react');
var {connect} = require('react-redux');
import ListItem from 'ListItem';
var TodoAPI = require('TodoAPI');

export var List = React.createClass({
  render: function() {
    var {todos, showCompleted, searchText} = this.props;

    var renderListItems = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        );
      }

      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      return filteredTodos.map((item) => {
        return (<ListItem key={item.id} {...item}/>)
      });
    };

    return (
      <div>
        {renderListItems()}
      </div>
    )
  }
});

export default connect((state) => {
  return state;
})(List);
