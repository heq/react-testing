var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
    getInitialState: function () {
        return {
            name: 'React',
            message: 'Default message'
        };
    },
    handleUpdate: function (updates) {
        this.setState({
            name: updates.name,
            message: updates.message
        });
    },
    render: function () {
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
                <GreeterMessage name={name} message={message} />
                <GreeterForm onUpdate={this.handleUpdate} />
            </div>
        );
    }
});

module.exports = Greeter;
