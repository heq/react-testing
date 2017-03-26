var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        var location = this.refs.searchInput.value;
        var encodedLocation = encodeURIComponent(location);

        if (location.length > 0) {
            this.refs.searchInput.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
        }
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Coordinates App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Coordinates</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>

                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search for places" ref="searchInput" />
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get coordinates"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Navigation;
