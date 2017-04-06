var React = require('react');
var ListItem = require('ListItem');

var List = React.createClass({
    render: function () {
        var {listItems} = this.props;

        var renderListItems = () => {
            return listItems.map((item) => {
                return (
                    <ListItem key={item.id} {...item} onToggle={this.props.onToggle}/>
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
