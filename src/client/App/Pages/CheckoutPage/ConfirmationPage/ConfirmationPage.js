
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CheckoutPage.css';

const ConfirmationPage = ( props ) => {
    return (
        <div className={ styles.ConfirmationPage }>
            <div className={ styles.Message }>Thanks for your order!</div>
            <Link to={ '/' }>
                <div className={ styles.Message }>Back to Store</div>
            </Link>
        </div>
    )
};

export default ConfirmationPage;