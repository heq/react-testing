var React = require('react');
var CoordinatesForm = require('CoordinatesForm');
var CoordinatesMessage = require('CoordinatesMessage');
var ErrorModal = require('ErrorModal');
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
            isLoading: true,
            location: undefined,
            latlong: undefined,
            errorMessage: undefined,
        });

        digitransit.getLatLong(location).then(
            // success
            function (latlong) {
                self.setState({
                    isLoading: false,
                    location: location,
                    latlong: latlong
                });
            },
            // error
            function (e) {
                self.setState({
                    isLoading: false,
                    errorMessage: e.message
                });
            }
        );
    },
    componentDidMount: function () {
        var location = this.props.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function(newProps) {
        var location = newProps.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    render: function() {
        var {isLoading, location, latlong, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <p>Fetching...</p>;
            } else if (location && (latlong && latlong.length > 0)) {
                return <CoordinatesMessage latlong={latlong} location={location}/>
            } else if (location) {
                return <p>No results for {location}</p>
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }

        return (
            <div>
                <h1 className="page-title">Get coordinates</h1>
                <CoordinatesForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Coordinates;
