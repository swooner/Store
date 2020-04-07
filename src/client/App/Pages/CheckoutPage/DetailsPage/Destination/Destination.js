
import React, { useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import SaleMethod from './SaleMethod';
import DeliveryAddress from './DeliveryAddress';
import getCheckoutData from '../../CheckoutPage';
import styles from '../../CheckoutPage.css';

const cx = classnames.bind( styles );

const Destination = ( props ) => {
    const { setCheckoutData, checkoutData } = props;
    const selectSaleMethod = ( name ) => {
        setCheckoutData( 'checkout-sale-method', name );
    };
    const selectDeliveryAddressOption = ( choice ) => {
        setCheckoutData( 'checkout-delivery-address-option', choice );
    };
    const updateDeliveryAddress = ( e, name ) => {
        const customDeliveryAddress = checkoutData.customDeliveryAddress || {};
        const obj = Object.assign( {}, customDeliveryAddress, {
            [ name ]: e.target.value
        });
        setCheckoutData( 'checkout-custom-delivery-address', JSON.stringify( obj ) );
    };
    const activeSaleMethod = localStorage.getItem( 'checkout-sale-method' );
    return (
        <div className={ styles.Destination }>
            <SaleMethod 
                { ...props }
                activeSaleMethod={ activeSaleMethod }
                onSaleMethodOptionClick={ selectSaleMethod } />
            { activeSaleMethod === 'DELIVERY' &&
                <DeliveryAddress
                    { ...props }
                    onCustomAddressChange={ updateDeliveryAddress }
                    onDeliveryAddressOptionClick={ selectDeliveryAddressOption }  />
            }
        </div>
    )
};

export default Destination;