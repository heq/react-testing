var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="page-title">About</h1>
            <p>This is an <a href="https://facebook.github.io/react/">React</a> app example styled with <a href="http://foundation.zurb.com/sites.html">Foundation sites</a>.</p>
            <p>The app uses <a href="https://digitransit.fi/en/developers/">Digitransit</a> API to fetch coordinates.</p>
        </div>
    );
};

module.exports = About;
