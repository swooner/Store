
import React, { useEffect } from 'react';
import classnames from 'classnames/bind';
import { useLocation, useHistory } from 'react-router-dom';
import { graphql, createFragmentContainer } from 'react-relay';
import SizeSelect from '../../../Components/SizeSelect/SizeSelect';
import QuantitySelect from '../../../Components/QuantitySelect/QuantitySelect';
import SubmitButton from '../../../Components/SubmitButton/SubmitButton';
import CartItem from './CartItem';
import DeleteCartItemMutation from '../mutations/DeleteCartItemMutation';
import UpdateCartItemMutation from '../mutations/UpdateCartItemMutation';
import styles from '../StorePage.css';

const cx = classnames.bind( styles );

const Cart = ( props ) => {
    const { cart: { cart }, isEditable, name, setCheckoutData } = props;
    if (!cart) {
        return null;
    }

    const { order_id, items, total } = cart;
    useEffect( () => {
        console.log('confirming')
        if ( setCheckoutData ) {
            setCheckoutData( 'checkout-order-id', order_id );
            const products = items.map( item => {
                console.log( 'item:', item );
                const { product, quantity } = item;
                const { product_id, name } = product;
                return {
                    product_id,
                    name,
                    quantity
                }
            });
            setCheckoutData( 'checkout-products', JSON.stringify( products ) );
        }
    }, [])
    const history = useHistory();
    const location = useLocation( );
    console.log( 'location:', location );
    const deleteCartItem = ({ order_id, product_id }) => {
        const form = {
            order_id,
            product_id
        };
        DeleteCartItemMutation.commit( form );
    };
    const updateItem = ( e, cartItem, action ) => {
        const { size, product } = cartItem
        const quantity = action == 'quantity' ? parseInt( e.target.value ) : cartItem.quantity;
        const size_id = action == 'size' ? parseInt( product.sizes[ e.target.value ].product_size_id ) : cartItem.size.product_size_id;
        const form = {
            order_id,
            product_id: product.product_id,
            size_id,
            quantity,
        };
        // console.log( 'form:', form );
        UpdateCartItemMutation.commit( form );
    };
    const goCheckout = () => {
        history.push( '/checkout' );
    };
    // console.log( 'Cart props:', props );
    const className = cx(
        'Cart',
        `Cart--name-${ name }`
    );
    return (
        <div className={ className }>
            { cart ? (
                <div>
                  
                        { 
                            cart.items.map(( cartItem, i ) => {
                                const { product } = cartItem;
                                const { product_id } = product;
                                return (
                                    <CartItem 
                                        key={ i } 
                                        location={ location }
                                        isEditable={ isEditable }
                                        cartItem={ cartItem }
                                        updateItem={ updateItem } 
                                        deleteCartItem={ ( ) => deleteCartItem({ order_id, product_id }) } />
                                )
                            })
                        }
                  
                  <div className={ styles.costContainer }>
                <span className={styles.costLabel}>
                Total: { total }
                </span>
                <div>
                { location.pathname == '/' &&
                        <SubmitButton text={ 'Checkout' } onClick={ () => goCheckout() } />
                    }
                    </div>
                    </div>
                </div>
            ) : (
                <div></div> 
            )}
        </div>
    )
};


export default createFragmentContainer( Cart, {
    cart: graphql`
        fragment Cart_cart on User {
            cart {
                order_id
                items {
                    product {
                        product_id
                        name
                        price
                        sizes {
                            product_size_id
                            name
                        }
                    }
                    size {
                        product_size_id
                        name
                    }
                    quantity
                    cost
                }
                total
            }
        }
    `
});