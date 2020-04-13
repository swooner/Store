
import React from 'react';
import { useHistory } from 'react-router-dom';
import Cart from '../../StorePage/Cart/Cart';
import SubmitButton from '../../../Components/SubmitButton/SubmitButton';
import SubmitOrderMutation from '../mutations/SubmitOrderMutation';
import styles from '../CheckoutPage.css';

const SummaryPage = ( props ) => {
    const { viewer, checkoutData } = props;
    const { cart } = viewer;
    const history = useHistory( );
    const submitOrder = ( ) => {
        const { order_id, saleMethod, paymentMethod, deliveryAddressOption: addressType, customDeliveryAddress, products } = checkoutData;
        const { street, city, state, zip_code } = saleMethod === 'DELIVERY' && addressType == 'CUSTOM' ? customDeliveryAddress || {} : {};
        const form = {
            order_id: parseInt( order_id ),
            saleMethod,
            addressType,
            street,
            city,
            state,
            zip_code,
            paymentMethod,
            products,
        };
        console.log( 'form:', form ); 
        SubmitOrderMutation.commit( form );
    };
    const goToConfirmation = ( ) => {
        // history.push( '/checkout/confirmation' );
    };
    // console.log( 'SummaryPage props:', props );
    return (
        <div className={ styles.SummaryPage }>
            <Cart 
                { ...props }
                cart={ viewer }
                isEditable={ false }
                name={ 'SummaryCart' } />
            <SubmitButton text={ 'Submit order' } onClick={ submitOrder } />
        </div>
    )
};

export default SummaryPage;