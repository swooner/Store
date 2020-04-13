
import React from 'react';
import SizeSelect from '../../../Components/SizeSelect/SizeSelect';
import QuantitySelect from '../../../Components/QuantitySelect/QuantitySelect';
import SubmitButton from '../../../Components/SubmitButton/SubmitButton';
import styles from '../StorePage.css';

const CartItem = ({ cartItem, location, updateItem, isEditable, deleteCartItem }) => {
    const { product, size, quantity, cost } = cartItem;
    return (
        <div className={ styles.CartItem }>
            <Product product={ product } />
            <div className={ styles.Quantity }>
                { isEditable ? (
                    <QuantitySelect onChange={ ( e ) => updateItem( e, cartItem, 'quantity' ) } defaultValue={ quantity } />
                ) : (
                    <div className={ styles.Value }>Quantity: { quantity }</div>
                )}
            </div>
            { size && size.name != 'N/A' &&
                <div className={ styles.Size }>
                    { isEditable ? (
                        <SizeSelect 
                            sizes={ product.sizes }
                            isEditable={ isEditable } 
                            onChange={ ( e ) => updateItem( e, cartItem, 'size' ) } 
                            defaultValue={ getSizeIndex( product.sizes, size.name ) } />
                    ) : (
                        <div className={ styles.Value }>Size: { size.name }</div>
                    )}
                </div>
            }
            <div className={ styles.Cost }>Cost: ${ cost }</div>
            { location.pathname != '/checkout/summary' && location.pathname != '/checkout/confirmation' &&
                <SubmitButton style={ 'Delete' } onClick={ deleteCartItem } text={ 'Remove' } />
            }
        </div>
    )
};

const Product = ({ product }) => {
    const { name, price } = product;
    return (
        <div className={ styles.Product }>
            <div className={ styles.Name }>{ name }</div>   
            <div className={ styles.Price }>${ price }</div> 
        </div>
    )
};

const getSizeIndex = ( sizes, sizeName ) => {
    const correctSize = sizes.filter( size => {
        return size.name == sizeName;
    });
    return correctSize[ 0 ]
};

export default CartItem;