var React = require('react');
var CoordinatesForm = require('CoordinatesForm');
var CoordinatesMessage = require('CoordinatesMessage');
var digitransit = require('digitransit');

var Coordinates = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function(location) {
        var self = this;
        this.setState({
            isLoading: true
        });

        digitransit.getLatLong(location).then(function (latlong) {
            self.setState({
                isLoading: false,
                location: location,
                latlong: latlong
            });
        },
        function (errorMessage) {
            self.setState({
                isLoading: false
            });
            console.log('error: '+errorMessage);
        });
    },
    render: function() {
        var {isLoading, location, latlong} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <p>Fetching...</p>;
            } else if (location && (latlong && latlong.length > 0)) {
                return <CoordinatesMessage latlong={latlong} location={location}/>
            } else if (location) {
                return <p>No results for {location}</p>
            }
        }

        return (
            <div>
                <h2>Coordinates Component</h2>
                <CoordinatesForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Coordinates;
