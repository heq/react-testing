var React = require('react');

var Main = (props) => {
    return (
        <div>
            <h1>Boilerplate</h1>
            <div className="row">
                <div className="column small-centered medium-6 large-4">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;
