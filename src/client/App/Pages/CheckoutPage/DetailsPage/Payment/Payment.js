
import React, { useState } from 'react';
import Method from './Method';
import CashMessage from './CashMessage';
import CardForm from './CardForm';
import styles from '../../CheckoutPage.css';

const Payment = ( props ) => {
    const { viewer, setCheckoutData, checkoutData } = props;
    const changeMethod = ( choice ) => {
        setCheckoutData( 'checkout-payment-method', choice );
    };
    const { paymentMethod, saleMethod } = checkoutData;
    return (
        <div className={ styles.Payment }>
            <div className={ styles.Title }>Payment Method</div>
            <Method
                onMethodChange={ changeMethod }
                activeMethod={ paymentMethod } />
            { paymentMethod == 'cash' ? (
                <CashMessage saleMethod={ saleMethod } />
            ) : (
                <div className="col-md-3">
                <CardForm 
                    { ...props } />
                    </div>
            )}
        </div>
    )
};



export default Payment;