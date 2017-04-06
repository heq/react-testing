var React = require('react');

var Search = React.createClass({
    handleSeach: function() {
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    },
    render: function() {
        var {} = this.props;

        return (
            <div>
                <div>
                    <input ref="searchText" onChange={this.handleSeach} type="text" placeholder="Search todos" />
                </div>
                <div>
                    <label>
                        <input ref="showCompleted" onChange={this.handleSeach} type="checkbox" />
                        Show completed
                    </label>
                </div>
            </div>
        )
    }
});

module.exports = Search;
