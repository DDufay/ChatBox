import React from 'react';
import PropTypes from 'prop-types';

class FormTchat extends React.Component {

    state = {
        length: this.props.length
    };

    createMessage = event => {
        event.preventDefault();
        const message = {
            message: this.message.value,
            pseudo: this.props.pseudo
        };
        this.props.addMessage(message);
        this.messageForm.reset();
        const length = this.props.length;
        this.setState({ length });
    };

    countLengthMessage = event => {
        const length = this.props.length - this.message.value.length;
        this.setState({ length });
    };

    render() {
        return (
            <form className="form" onSubmit={event => this.createMessage(event)} ref={form => this.messageForm = form}>
                <textarea
                    maxLength={this.props.length}
                    required
                    ref={input => this.message = input}
                    onChange={event => this.countLengthMessage(event)}
                >
                </textarea>
                <div className="info">
                    {this.state.length} restant
                </div>
                <button className="submit">Envoyer</button>
            </form>
        );
    }

    static propTypes = {
      addMessage: PropTypes.func.isRequired,
      pseudo: PropTypes.string.isRequired,
      length: PropTypes.number.isRequired,
    };
}

export default FormTchat;
