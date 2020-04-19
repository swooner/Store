
import React from 'react';
import classnames from 'classnames/bind';
import Question, { Choice } from '../../../../Components/Question/Question';
import styles from '../../CheckoutPage.css';

const SaleMethod = ({ activeSaleMethod, onSaleMethodOptionClick }) => {
    return (
        <React.Fragment>
            <div className={ styles.saleMethodHeader }>
                <span>How do you want it?</span>
            </div>
            <React.Fragment>
                <Question>
                <div className={ styles.button1 }>
                    <Choice name={ 'DELIVERY' } text={ 'delivery' } activeChoice={ activeSaleMethod } onClick={ onSaleMethodOptionClick } />
                    </div>
                    <div className={ styles.button1 }>
                    <Choice name={ 'TAKEOUT' }  text={ 'pick-up' } activeChoice={ activeSaleMethod } onClick={ onSaleMethodOptionClick } />
                </div>
                </Question>
            </React.Fragment>
        </React.Fragment>
    )
};

export default SaleMethod;