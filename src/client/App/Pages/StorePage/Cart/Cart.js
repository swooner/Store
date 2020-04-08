
import React from 'react';
import { useHistory } from 'react-router-dom';
import { graphql, createFragmentContainer } from 'react-relay';
import SizeSelect from '../../../Components/SizeSelect/SizeSelect';
import QuantitySelect from '../../../Components/QuantitySelect/QuantitySelect';
import SubmitButton from '../../../Components/SubmitButton/SubmitButton';
import CartItem from './CartItem';
import DeleteCartItemMutation from '../mutations/DeleteCartItemMutation';
import UpdateCartItemMutation from '../mutations/UpdateCartItemMutation';
import styles from '../StorePage.css';

const Cart = ( props ) => {
    const { cart, isEditable } = props;
    const { order_id, items, total } = cart ? cart.cart : {};
    const history = useHistory();
    // console.log( 'cart:', cart );
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
    return (
        <div className={ styles.Cart }>
            { cart && cart.cart ? (
                <div>
                    <div className={ styles.Items }>
                        { cart.cart ? cart.cart.items.map(( cartItem, i ) => {
                            const { product } = cartItem;
                            const { product_id } = product;
                            return (
                                <CartItem 
                                    key={ i } 
                                    isEditable={ isEditable }
                                    cartItem={ cartItem }
                                    updateItem={ updateItem } 
                                    deleteCartItem={ ( ) => deleteCartItem({ order_id, product_id }) } />
                            )
                        }) : [] }
                    </div>
                    <div className={ styles.Total }>Total: { total }</div>
                    <SubmitButton text={ 'Checkout' } onClick={ () => goCheckout() } />
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