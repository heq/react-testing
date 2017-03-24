var React = require('react');

var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var updates = {};
        var nameRef = this.refs.nameInput;
        var name = nameRef.value;
        var messageRef = this.refs.messageInput;
        var message = messageRef.value;

        if (typeof name === 'string' && name.length > 0) {
            updates.name = name;
        }
        if (typeof message === 'string' && message.length > 0) {
            updates.message = message;
        }
        if (name && message) {
            this.props.onUpdate(updates);
        }

        nameRef.value = '';
        messageRef.value = '';
    },
    render: function () {
        return(
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="nameInput" placeholder="Enter name"/>
                <br/>
                <textarea type="text" ref="messageInput" placeholder="Enter message"></textarea>
                <br/>
                <button>Set name</button>
            </form>
        );
    }
});

module.exports = GreeterForm;
