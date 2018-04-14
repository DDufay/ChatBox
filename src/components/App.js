import React from 'react';
import FormTchat from "./FormTchat";
import Message from "./Message";
import { base } from '../base';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../animation.css';
import PropTypes from "prop-types";

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

    componentDidUpdate() {
        this.messages.scrollTop = this.messages.scrollHeight;
    }

    addMessage = message => {
        const messages = { ...this.state.messages };
        const timestamp = Date.now();
        messages[`message-${timestamp}`] = message;
        // Delete Messages > 10
        Object.keys(messages).slice(0, -10).map(key => messages[key] = null);
        this.setState({ messages });
    };

    isUser = pseudo => {
      return pseudo === this.props.match.params.pseudo
    };

    render() {

        const messages = Object
            .keys(this.state.messages)
            .map(key => <Message key={key} details={this.state.messages[key]} isUser={this.isUser} />)
        ;

        return (
            <div className="box">
                <div>
                    <div className="messages" ref={input => this.messages = input}>
                        <ReactCSSTransitionGroup
                            component="div"
                            className="message"
                            transitionName="message"
                            transitionEnterTimeout={200}
                            transitionLeaveTimeout={200}
                        >
                            {messages}
                        </ReactCSSTransitionGroup>
                    </div>
                    <FormTchat addMessage={this.addMessage} pseudo={this.props.match.params.pseudo} length={140} />
                </div>
            </div>
        );
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
    };
}

export default App;
