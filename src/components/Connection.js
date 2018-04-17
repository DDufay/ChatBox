import React from 'react';
import PropTypes from 'prop-types';

class Connection extends React.Component {

    submit = event => {
        event.preventDefault();
        const pseudo = this.pseudoInput.value;
        this.props.history.push(`/ChatBox/pseudo/${pseudo}`)
    };

    render() {
        return (
            <div className="connexionBox" onSubmit={(event) => this.submit(event) }>
                <form className="connexion">
                    <input
                        type="text"
                        placeholder="Pseudo"
                        ref={ input => {this.pseudoInput = input }}
                        required
                    />
                    <button type="submit">Valider</button>
                </form>
            </div>
        );
    }

    static contextTypes = {
        router: PropTypes.object
    }
}

export default Connection;
