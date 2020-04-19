
import React from 'react';
import Question, { Choice } from '../../../../Components/Question/Question';
import styles from '../../CheckoutPage.css';

const Method = ({ activeMethod, onMethodChange }) => {
    return (
        <div className={ styles.Method }>
            <Question>
            <div className={ styles.button3 }>
                <Choice name={ 'cash' } activeChoice={ activeMethod } onClick={ onMethodChange } />
                </div>
                <div className={ styles.button3 }>

                <Choice name={ 'card' } activeChoice={ activeMethod } onClick={ onMethodChange } />
                </div>
            </Question>
        </div>
    )
};



export default Method;