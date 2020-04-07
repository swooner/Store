
import React, { useState } from 'react';
import ControlGroup from '../../../../Components/ControlGroup/ControlGroup';
import Input from '../../../../Components/Input/Input';
import SubmitButton from '../../../../Components/SubmitButton/SubmitButton';
import SavePaymentMutation from '../../mutations/SavePaymentMutation';
import ValidatePaymentMutation from '../../mutations/ValidatePaymentMutation';
import styles from '../../CheckoutPage.css';

const CardForm = ( props ) => {
    const { cardInfo, onCardFormChange, validatePayment } = props;
    const savePayment = ( ) => {
        const validation = validatePayment( );
        if ( validation.success ) {
            const { user_id } = viewer;
            const { name, number, expiration_month, expiration_year } = cardInfo;
            const form = {
                user_id,
                card_name: name,
                card_number: number,
                expiration_month,
                expiration_year,
            };
            // SavePaymentMutation.commmit( form );
        }
    };
    return (
        <div className={ styles.CardForm }>
            <ControlGroup title={ 'Name on card' }>
                <Input placeholder={ 'Name on card' } onChange={ ( e ) => onCardFormChange( e, 'name' ) } />
            </ControlGroup>
            <ControlGroup title={ 'Card Number' }>
                <Input placeholder={ 'Card number' } onChange={ ( e ) => onCardFormChange( e, 'number' ) } />
            </ControlGroup>
            <ControlGroup title={ 'Expiration' }>
                <Input type={ 'number' } placeholder={ 'Month' } onChange={ ( e ) => onCardFormChange( e, 'expiration_month' ) } />
                <Input type={ 'number' } placeholder={ 'Year' } onChange={ ( e ) => onCardFormChange( e, 'expiration_year' ) } />
            </ControlGroup>
            <ControlGroup title={ 'Security code' }>
                <Input type={ 'number' } placeholder={ 'Code' } onChange={ ( e ) => onCardFormChange( e, 'security_code' ) } />
            </ControlGroup>
            <SubmitButton text={ 'Save payment' } onClick={ ( e ) => savePayment( ) } />
        </div>
    )
};

export default CardForm;