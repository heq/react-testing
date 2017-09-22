var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var Search = React.createClass({
  render: function() {
    var {dispatch, showCompleted, searchText} = this.props;

    var setSearchText = () => {
      var searchText = this.refs.searchText.value;
      dispatch(actions.setSearchText(searchText));
    }
    var toggleShowCompleted = () => {
      dispatch(actions.toggleShowCompleted());
    }

    return (
      <div className="container__header">
        <div>
          <input ref="searchText" onChange={setSearchText} value={searchText} type="text" placeholder="Search todos"/>
        </div>
        <div>
          <label>
            <input ref="showCompleted" onChange={toggleShowCompleted} checked={showCompleted} type="checkbox"/>
            Show completed
          </label>
        </div>
      </div>
    )
  }
});

export default connect((state) => {
  return {
    showCompleted: state.showCompleted,
    searchText: state.searchText
  }
})(Search);
