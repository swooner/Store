
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cart from '../../StorePage/Cart/Cart';
import Destination from './Destination/Destination';
import Payment from './Payment/Payment';
import SubmitButton from '../../../Components/SubmitButton/SubmitButton';
import ValidatePaymentMutation from '../mutations/ValidatePaymentMutation';
import styles from '../CheckoutPage.css';

const DetailsPage = ( props ) => {
    const history = useHistory( );
    const { viewer, checkoutData } = props;
    const [ cardInfo, updateCardInfo ] = useState( {} );
    const [ cardError, updateCardError ] = useState( );
    // For some weird reasons Webpack does not permit calling ValidatePaymentMutation.commit
    // directly inside of validatePayment function
    const commitValidationPayment = ( form ) => {
        return ValidatePaymentMutation.commit( form )
            .then( res => {
                console.log( 'res:', res );
                return { success: true }
            })
            .catch ( err => {
                console.error( 'promise error:', err[ 0 ].message )
                updateCardError( err[ 0 ].message );
            })
    };
    const updateCardForm = ( e, name ) => {
        updateCardError( null );
        updateCardInfo({ ...cardInfo, [ name ]: e.target.value });
    };
    const validatePayment = ( ) => {
        const { name, number, expiration_month, expiration_year, security_code } = cardInfo;
        const form = {
            card_name: name,
            card_number: number,
            expiration_month: +expiration_month,
            expiration_year: +expiration_year,
            security_code: +security_code,
        };
        // console.log( 'form:', form );
        return commitValidationPayment( form );
    };
    const goToSummary = ( ) => {
        // console.log( 'checkoutData:', checkoutData );
        const { paymentMethod } = checkoutData;
        if ( paymentMethod != 'cash' ) {
            validatePayment( )
                .then( res => {
                    console.log( 'res:', res );
                    if ( res.success ) {
                        history.push( '/checkout/summary' );
                    }
                });
            return false;
        }
    };
    return (
        <div className={ styles.DetailsPage }>
            <div className={ styles.FormSide }>
                <Destination 
                    { ...props } />
                <Payment 
                    { ...props }
                    cardInfo={ cardInfo }
                    cardError={ cardError }
                    validatePayment={ validatePayment }
                    onCardFormChange={ updateCardForm } />
                <div className={styles.reviewOrder}>
                    <SubmitButton text={ 'Review order' } onClick={ goToSummary } />
                </div>
             </div>
            <Cart 
                { ...props }
                cart={ viewer }
                name={ 'DetailsPage' }
                isEditable={ false } />
        </div>
    )
};

export default DetailsPage;