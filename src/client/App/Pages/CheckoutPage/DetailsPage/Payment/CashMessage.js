
import React from 'react';
import styles from '../../CheckoutPage.css';

const CashMessage = ({ saleMethod }) => {
    return (
        <div className={ styles.CashMessage }>
            { saleMethod === 'delivery' ? (
               <span>Have your cash ready for the driver.</span> 
            ) : (
                <span>You'll pay at the store.</span> 
            )}
        </div>
    )
};

export default CashMessage;