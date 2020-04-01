
import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import styles from '../StorePage.css';

const Cart = ( props ) => {
    return (
        <div className={ styles.Cart }>
            
        </div>
    )
};

export default createFragmentContainer( Cart, {
    cart: graphql`
        fragment Cart_cart on User {
            cart {
                items {
                    product {
                        name
                    }
                    size
                    quantity
                    cost
                }
                total
            }
        }
    `
});