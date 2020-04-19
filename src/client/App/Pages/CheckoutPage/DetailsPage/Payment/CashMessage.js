
import React from 'react';
import styles from '../../CheckoutPage.css';

const CashMessage = ({ saleMethod }) => {
    return (
        <div className={ styles.CashMessageForm }>
            <div className={ styles.CashMessageBody }>
            { saleMethod === 'delivery' ? (
               <span>Have your cash ready for the driver.</span> 
            ) : (
                <span>You'll pay at the store.</span> 
            )}
            </div>
        </div>
    )
};

export default CashMessage;