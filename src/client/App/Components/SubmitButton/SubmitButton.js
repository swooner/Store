
import React, { Component } from 'react';
import styles from './SubmitButton.css';

class SubmitButton extends Component {
    render() {
        const { text, onClick } = this.props;
        return (
            <button style={{margin: "10px 0px"}} className="btn btn-danger " onClick={onClick}>{text || 'Submit'}</button>
        )
    }
};

export default SubmitButton;