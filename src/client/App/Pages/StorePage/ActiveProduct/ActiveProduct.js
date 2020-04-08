
import React, { useState, useEffect } from 'react';
import SizeSelect from '../../../Components/SizeSelect/SizeSelect';
import QuantitySelect from '../../../Components/QuantitySelect/QuantitySelect';
import SubmitButton from '../../../Components/SubmitButton/SubmitButton';
import AddCartItemMutation from '../mutations/AddCartItemMutation';
import styles from '../StorePage.css';

const NOT_APPLICABLE_SIZE_ID = 0;

const ActiveProduct = ( props ) => {
    const { viewer, activeProduct } = props;
    const { product_id, name, description, price, sizes, picture_url } = activeProduct;
    const [ productForm, updateProductForm ] = useState( { quantity: 1, size: sizes.length ? sizes[ 0 ] : null } );
    const [ dynamicPrice, updateDynamicPrice ] = useState( price );

    const setDynamicPrice = ({ price, surcharge, quantity }) => {
        const newPrice = parseFloat( ( ( price + surcharge ) * quantity ).toFixed( 2 ) );
        updateDynamicPrice( newPrice );
    };
    const updateSize = ( e ) => {
        const newSizeIndex = e.target.value;
        const newSize = sizes[ newSizeIndex ];
        setDynamicPrice({ price, surcharge: newSize.surcharge, quantity: productForm.quantity });
        updateProductForm({ ...productForm, size: newSize })
    };
    const updateQuantity = ( e ) => {
        const newQuantity = parseInt( e.target.value );
        const currentSizeSurcharge = productForm.size ? productForm.size.surcharge : 0;
        setDynamicPrice({ price, surcharge: currentSizeSurcharge, quantity: newQuantity });
        updateProductForm({ ...productForm, quantity: newQuantity })
    };
    const submitForm = ( ) => {
        const { user_id } = viewer;
        const { size, quantity } = productForm;
        const form = {
            size_id: size ? size.product_size_id : NOT_APPLICABLE_SIZE_ID,
            quantity,
            product_id,
            user_id,
        };
        // console.log( 'form:', form );
        AddCartItemMutation.commit( form );
        props.selectProduct( null );
    };
    console.log( 'activeProduct:', activeProduct );
    return (
        <div className={ styles.ActiveProduct }>
            <button className={ styles.Close } onClick={ ( e ) => props.selectProduct( e, null ) }>Close</button>
            <div className={ styles.name }>{ name }</div>
            <div className={ styles.description }>{ description }</div>
            <div className={ styles.price }>${ dynamicPrice }</div>
            { picture_url &&
                <div>
                    <img className={ styles.image } src={ `${ picture_url }.jpeg` } alt=""/>
                </div>
            }

            { sizes && sizes.length > 0 && 
                <SizeSelect sizes={ sizes } onChange={ ( e ) => updateSize( e ) } />
            }
            <QuantitySelect onChange={ ( e ) => updateQuantity( e ) } />
            <SubmitButton text={ 'Add to cart' } onClick={ () => submitForm( ) } />
        </div>
    )
};

export default ActiveProduct;