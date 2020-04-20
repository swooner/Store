
import React from 'react';
import Question, { Choice } from '../../../../Components/Question/Question';
import styles from '../../CheckoutPage.css';

const Method = ({ activeMethod, onMethodChange }) => {
    console.log( 'activeMethod:', activeMethod );
    return (
        <div className={ styles.Method }>
            <Question>
                <Choice name={ 'cash' } activeChoice={ activeMethod } onClick={ onMethodChange } />
                <Choice name={ 'card' } activeChoice={ activeMethod } onClick={ onMethodChange } />
            </Question>
        </div>
    )
};



export default Method;