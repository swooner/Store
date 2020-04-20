
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
            })
            .catch ( err => {
                console.error( 'promise error:', JSON.parse ( err[ 0 ].message ) )
            })
    };
    const updateCardForm = ( e, name ) => {
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
            const validation = validatePayment( );
            console.log( 'validation:', validation );
            if ( !validation.success ) {
                return false;
            }
        }
        history.push( '/checkout/summary' );
    };
    return (
        <div className={ styles.DetailsPage }>
            <Destination 
                { ...props } />
            <Payment 
                { ...props }
                cardInfo={ cardInfo }
                cardError={ cardError }
                validatePayment={ validatePayment }
                onCardFormChange={ updateCardForm } />
            <Cart 
                { ...props }
                cart={ viewer }
                isEditable={ false } />
                <div className={styles.reviewOrder}>
            <SubmitButton text={ 'Review order' } onClick={ goToSummary } />
            </div>
        </div>
    )
};

export default DetailsPage;