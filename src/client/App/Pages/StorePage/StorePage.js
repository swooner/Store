
import React, { useState } from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import ProductList from './ProductList/ProductList';
import ActiveProduct from './ActiveProduct/ActiveProduct';
import Cart from './Cart/Cart';
import AddCartItemMutation from './mutations/AddCartItemMutation';
import styles from './StorePage.css';

const StorePage = ( props ) => {
    const { viewer, cart } = props;
    const [ activeCategory, activateCategory ] = useState( );
    const [ activeProduct, activateProduct ] = useState( );
    const selectCategory = ( category ) => {
        activateCategory( category );
    };
    const selectProduct = ( product ) => {
        // const { product_id } = product;
        // if ( product_id == activeProduct.product_id ) {
        //     activateProduct( null );
        // }
        activateProduct( product );
    };
    // console.log( 'StorePage.props:', props );
    return (
        <div className={ styles.StorePage }>
            <ProductList 
                { ...props } 
                categories={ props }
                selectProduct={ selectProduct }
                selectCategory={ selectCategory } />
            { activeProduct &&
                <ActiveProduct
                    { ...props }
                    activeProduct={ activeProduct }
                    selectProduct={ selectProduct } />
            }
            { !activeProduct &&
                <Cart 
                    { ...props }
                    cart={ viewer }
                    isEditable={ true } />
            }
        </div>
    )
};

export default createFragmentContainer( StorePage, {
    viewer: graphql`
        fragment StorePage_viewer on User @argumentDefinitions (
            id: { type: "Int" }
        ) {
            user_id
            ...Cart_cart
        }
    `
});