var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = (props) => {
    return (
        <div>
            <h2>Navigation Component</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>To Weather</IndexLink>
            <br/>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>To About</Link>
            <br/>
            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>To Examples</Link>
        </div>
    );
};

module.exports = Navigation;
