
import React from 'react';
import Question, { Choice } from '../../../../Components/Question/Question';
import styles from '../../CheckoutPage.css';

const Method = ({ activeMethod, onMethodChange }) => {
    return (
        <div className={ styles.Method }>
            <Question>
                <button className="btn btn-outline-primary">
                <Choice name={ 'cash' } activeChoice={ activeMethod } onClick={ onMethodChange } />
                </button>
                <button className="btn btn-outline-primary">

                <Choice name={ 'card' } activeChoice={ activeMethod } onClick={ onMethodChange } />
                </button>
            </Question>
        </div>
    )
};



export default Method;