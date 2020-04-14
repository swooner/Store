
import React from 'react';
import SizeSelect from '../../../Components/SizeSelect/SizeSelect';
import QuantitySelect from '../../../Components/QuantitySelect/QuantitySelect';
import SubmitButton from '../../../Components/SubmitButton/SubmitButton';
import styles from '../StorePage.css';

const CartItem = ({ cartItem, location, updateItem, isEditable, deleteCartItem }, props) => {
    const { product, size, quantity, cost } = cartItem;
    console.log('images', props)
    return (
        <div className={styles.item}>
            <div className={styles.image}><img src="https://lh3.googleusercontent.com/proxy/xdrt6bB5LK-UVCKs4nCOQOE78xBLg5qtNmX7j5WiqeXX8itzqiR_qoXvNde25k2u2GWzSJVYk_XSs-IQox_KPylihGUtX3R-aQTueyGMWn6NOZI6YpZrn-LcwaYBYu8YW2nWViXIZg" /></div>
            <Product product={ product } />
            <div className={ styles.quantity }>
                { isEditable ? (
                    <QuantitySelect onChange={ ( e ) => updateItem( e, cartItem, 'quantity' ) } defaultValue={ quantity } />
                ) : (
                    <div className={ styles.Value }>Quantity: { quantity }</div>
                )}
            </div>
            { size && size.name != 'N/A' ?
                <div className={ styles.quantity }>
                    { isEditable ? (
                        <SizeSelect 
                            sizes={ product.sizes }
                            isEditable={ isEditable } 
                            onChange={ ( e ) => updateItem( e, cartItem, 'size' ) } 
                            defaultValue={ getSizeIndex( product.sizes, size.name ) } />
                    ) : (
                        <div className={ styles.Value }>Size: { size.name }</div>
                    )}
                </div>: <div className={isEditable ? styles.noquantity: styles.checkoutquantity}></div>
            }
            <div className={ styles.costContainer }>
                <span className={styles.costLabel}>
                Cost: ${ cost }
                </span>
                <div>
                { location.pathname != '/checkout/summary' && location.pathname != '/checkout/confirmation' &&
                <SubmitButton style={ 'Delete' } onClick={ deleteCartItem } text={ 'Remove' } />
            }
                </div>
            </div>
         
        </div>
    )
};

const Product = ({ product }) => {
    const { name, price } = product;
    return (
        <div className={ styles.description }>
            <span>{name}</span>   
            <span>${ price }</span> 
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