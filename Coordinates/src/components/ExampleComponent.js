var React = require('react');

var ExampleComponent = React.createClass({
    getInitialState: function () {
        return {
            name: 'Default'
        };
    },
    handleUpdate: function (updates) {
        this.setState({
            name: updates.name
        });
    },
    render: function () {
        var name = this.state.name;

        return (
            <div>ExampleComponent</div>
        );
    }
});

module.exports = ExampleComponent;
