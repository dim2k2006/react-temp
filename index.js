import React from 'react';
import Actions from '../../actions/actions';
import AppStore from '../../stores/app-store';
import './index.styl';

let MarkdownTextarea = require('react-markdown-textarea');

export default class MessagesBox extends React.Component {
    state = {
        userInput: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let text = '';
        Actions.sendMessage(text);
    }

    render() {
        return (
            <div className="input__container">
                <form className="input__form" onSubmit={this.handleSubmit}>
                    <MarkdownTextarea noPreview saveButtonText='Send' />
                </form>
            </div>
        );
    }
}