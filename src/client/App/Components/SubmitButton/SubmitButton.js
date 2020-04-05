
import React, { Component } from 'react';
import styles from './SubmitButton.css';

class SubmitButton extends Component {
    render() {
        const { text, onClick } = this.props;
        return (
            <button className="btn btn-lg btn-primary btn-inline" onClick={onClick}>{text || 'Submit'}</button>
        )
    }
};

export default SubmitButton;