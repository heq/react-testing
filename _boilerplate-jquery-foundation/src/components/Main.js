var React = require('react');

var Main = (props) => {
    return (
        <div>
            <h1>Main Component</h1>
            <div>
                {props.children}
            </div>
        </div>
    );
};

module.exports = Main;
