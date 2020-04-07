
import React from 'react';
import classnames from 'classnames/bind';
import Question, { Choice } from '../../../../Components/Question/Question';
import styles from '../../CheckoutPage.css';

const SaleMethod = ({ activeSaleMethod, onSaleMethodOptionClick }) => {
    return (
        <div className={ styles.SaleMethod }>
            <div className={ styles.Header }>
                <div className={ styles.Title }>How do you want it?</div>
            </div>
            <div className={ styles.Body }>
                <Question>
                    <Choice name={ 'DELIVERY' } text={ 'delivery' } activeChoice={ activeSaleMethod } onClick={ onSaleMethodOptionClick } />
                    <Choice name={ 'TAKEOUT' }  text={ 'pick-up' } activeChoice={ activeSaleMethod } onClick={ onSaleMethodOptionClick } />
                </Question>
            </div>
        </div>
    )
};

export default SaleMethod;