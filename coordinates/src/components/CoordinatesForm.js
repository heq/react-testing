var React = require('react');

var CoordinatesForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var location = this.refs.locationInput.value;
        if (location.length > 0) {
            this.refs.locationInput.value = '';
            this.props.onSearch(location);
        }
    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="search" placeholder="Enter city name" ref="locationInput"/>
                <button className="button expanded" type="submit">Get Coordinates</button>
            </form>
        );
    }
});

module.exports = CoordinatesForm;
