var React = require('react');
var ListItem = require('ListItem');

var List = React.createClass({
    render: function () {
        var {listItems} = this.props;

        var renderListItems = () => {
            if (listItems.length === 0) {
                return (
                    <p className="container__message">Nothing to do</p>
                );
            }

            return listItems.map((item) => {
                return (
                    <ListItem key={item.id} {...item} onToggle={this.props.onToggle} />
                )
            });
        };

        return (
            <div>
                {renderListItems()}
            </div>
        )
    }
});

module.exports = List;
