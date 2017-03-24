var React = require('react');

var CoordinatesMessage = ({location, latlong}) => {
    return (
        <h3>
            {location} is in [{latlong[0]}, {latlong[1]}].
        </h3>
    );
};

module.exports = CoordinatesMessage;
