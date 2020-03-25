
import React, { Component } from 'react';
import styles from './Input.css';

class Input extends Component {
    render() {
        const { id, type, placeholder, value, onChange, isTextarea } = this.props;
        return isTextarea ? (
            <textarea className={ styles.Textarea } placeholder={ placeholder } defaultValue={ value } onChange={ onChange }></textarea>
        ) : (
            <input id={ id } className={ styles.Input } type={ type || 'text' } placeholder={ placeholder } value={ value } onChange={ onChange } />
        )
    }
};

export default Input;