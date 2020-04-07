
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
    const { viewer } = props;
    const [ cardInfo, updateCardInfo ] = useState( {} );
    const updateCardForm = ( e, name ) => {
        updateCardInfo({ ...cardInfo, [ name ]: e.target.value });
    };
    const validatePayment = ( ) => {
        const { name, number, expiration_month, expiration_year, security_code } = cardInfo;
        const form = {
            card_name: name,
            card_number: number,
            expiration_month,
            expiration_year,
        };
        ValidatePaymentMutation.commmit( form );
    };
    const goToSummary = ( ) => {
        const validation = validatePayment( );
        if ( validation.success ) {
            history.push( '/checkout/summary' );
        }
    };
    return (
        <div className={ styles.DetailsPage }>
            <Destination 
                { ...props } />
            <Payment 
                { ...props }
                cardInfo={ cardInfo }
                validatePayment={ validatePayment }
                onCardFormChange={ updateCardForm } />
            <Cart 
                cart={ viewer }
                isEditable={ false } />
            <SubmitButton text={ 'Review order' } onClick={ goToSummary } />
        </div>
    )
};

export default DetailsPage;