
import React from 'react';
import { useHistory } from 'react-router-dom';
import Cart from '../../StorePage/Cart/Cart';
import SubmitButton from '../../../Components/SubmitButton/SubmitButton';
import SubmitOrderMutation from '../mutations/SubmitOrderMutation';
import styles from '../CheckoutPage.css';

const SummaryPage = ( props ) => {
    const { viewer, cart, checkoutData } = props;
    const history = useHistory( );
    const submitOrder = ( ) => {
        const { order_id } = cart;
        const { saleMethod, paymentMethod, deliveryAddressOption: addressType, customDeliveryAddress } = checkoutData;
        const { street, city, state, zip_code } = customDeliveryAddress || {};
        const form = {
            order_id,
            saleMethod,
            addressType,
            street,
            city,
            state,
            zip_code,
            paymentMethod,
        };
        // SubmitOrderMutation.commit( form );
    };
    const goToConfirmation = ( ) => {
        // history.push( '/checkout/confirmation' );
    };
    console.log( 'SummaryPage props:', props );
    return (
        <div className={ styles.SummaryPage }>
            <Cart 
                cart={ viewer }
                isEditable={ false } />
            <SubmitButton text={ 'Submit order' } onClick={ submitOrder } />
        </div>
    )
};

export default SummaryPage;