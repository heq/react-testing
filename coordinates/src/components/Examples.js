var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="page-title">Examples</h1>
            <p>Here are few example locations to try:</p>
            <ol>
                <li>
                    <Link to="/?location=Kamppi">Kamppi</Link>
                </li>
                <li>
                    <Link to="/?location=Korvatunturi">Korvatunturi</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;
