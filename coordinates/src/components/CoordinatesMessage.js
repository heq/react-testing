var React = require('react');

var CoordinatesMessage = ({location, latlong}) => {
    return (
        <h3>{location}, coordinates are<br/>
        <b>[{latlong[0]}, {latlong[1]}]</b>
        </h3>
    );
};

module.exports = CoordinatesMessage;
