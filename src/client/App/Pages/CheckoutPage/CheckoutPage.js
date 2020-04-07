
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { graphql, createFragmentContainer } from 'react-relay';
import DetailsPage from './DetailsPage/DetailsPage';
import SummaryPage from './SummaryPage/SummaryPage';
import ConfirmationPage from './ConfirmationPage/ConfirmationPage';
import styles from './CheckoutPage.css';

const CheckoutPage = ( props ) => {
    const { viewer } = props;
    const [ data, setComponentData ] = useState( {} );
    useEffect(() => {
        const data = getStorageData( );
        setComponentData( data );
    }, [] );
    const setCheckoutData = ( storageName, value ) => {
        localStorage.setItem( storageName, value  );
        setComponentData( getStorageData );
    };
    // console.log( 'Checkout page props:', props );
    return (
        <div className={ styles.CheckoutPage }>
            <Switch>
                <Route exact path={ '/checkout' } render={ () => {
                    return (
                        <DetailsPage 
                            { ...props }
                            checkoutData={ data }
                            setCheckoutData={ setCheckoutData } />
                    )
                }} />
                <Route path={ '/checkout/summary' } render={ () => {
                    return (
                        <SummaryPage 
                            { ...props }
                            checkoutData={ data } />
                    )
                }} />
                <Route path={ '/checkout/confirmation' } render={ () => {
                    return (
                        <ConfirmationPage 
                            { ...props } />
                    )
                }} />
            </Switch>
        </div>
    )
};

export const getStorageData = ( ) => {
    const customDeliveryAddress = localStorage.getItem( 'checkout-custom-delivery-address' );
    const billingDeliveryAddress = localStorage.getItem( 'checkout-billing-delivery-address' );
    const data = Object.assign( {}, {
        saleMethod: localStorage.getItem( 'checkout-sale-method' ),
        deliveryAddressOption: localStorage.getItem( 'checkout-delivery-address-option' ),
        customDeliveryAddress: customDeliveryAddress ? JSON.parse( customDeliveryAddress ) : null,
        paymentMethod: localStorage.getItem( 'checkout-payment-method' ),
    });
    return data;
};

export default createFragmentContainer( CheckoutPage, {
    viewer: graphql`
        fragment CheckoutPage_viewer on User @argumentDefinitions (
            id: { type: "Int" }
        ) {
            user_id
            first_name
            last_name
            street
            email_address
            city
            state
            zip_code
            phone_number
            ...Cart_cart
        }
    `
});