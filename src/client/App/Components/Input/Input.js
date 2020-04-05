
import React, { Component } from 'react';
import styles from './Input.css';

class Input extends Component {
    render() {
        const { id, type, placeholder, value, onChange, textarea, min, max, step } = this.props;
        return textarea ? (
            <textarea className={styles.Textarea} placeholder={placeholder} defaultValue={value} onChange={onChange}></textarea>
        ) : (
                <input
                    id={id}
                    className="form-control"
                    type={type || 'text'}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    min={min}
                    max={max}
                    step={step} />
            )
    }
};

export default Input;