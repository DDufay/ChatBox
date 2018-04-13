import React from 'react';
import FormTchat from "./FormTchat";
import Message from "./Message";
import { base } from '../base';

class App extends React.Component {

    state = {
        messages: {}
    };

    componentWillMount() {
        this.ref = base.syncState('/', {
            context: this,
            state: 'messages'
        });
    }

    addMessage = message => {
        const messages = { ...this.state.messages };
        const timestamp = Date.now();
        messages[`message-${timestamp}`] = message;
        // Delete Messages > 10
        Object.keys(messages).slice(0, -10).map(key => messages[key] = null);
        this.setState({ messages });
    };

    render() {

        const messages = Object
            .keys(this.state.messages)
            .map(key => <Message key={key} details={this.state.messages[key]}/>)
        ;

        return (
            <div className="box">
                <div>
                    <div className="messages">
                        {messages}
                    </div>
                    <FormTchat addMessage={this.addMessage} pseudo={this.props.match.params.pseudo} length="140"/>
                </div>
            </div>
        );
    }
}

export default App;
