
import React, { Component } from 'react';
import styles from './SubmitButton.css';

class SubmitButton extends Component {
    render() {
        const { text, onClick } = this.props;
        return (
            <button className={ styles.SubmitButton } onClick={ onClick }>{ text }</button>
        )
    }
};

export default SubmitButton;