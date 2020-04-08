
import React, { useState } from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import ProductList from './ProductList/ProductList';
import ProductView from './ProductView/ProductView';
import Cart from './Cart/Cart';
import AddCartItemMutation from './mutations/AddCartItemMutation';
import styles from './StorePage.css';

const StorePage = ( props ) => {
    const { viewer, cart } = props;
    const [ activeCategories, activateCategory ] = useState( { Entrees: { isActive: true } } );
    const [ activeProduct, activateProduct ] = useState( );
    const [ activeHoverProduct, activateHoverProduct ] = useState( );
    const selectCategory = ( category ) => {
        const categoryState = activeCategories[ category.name ];
        const categoryIsActive = categoryState ? categoryState.isActive : false ;
        activateCategory({ ...activeCategories, [ category.name ]: { isActive: !categoryIsActive } });
    };
    const selectProduct = ( e, product ) => {
        e.stopPropagation( );
        // const { product_id } = product;
        // if ( product_id == activeProduct.product_id ) {
        //     activateProduct( null );
        // }
        activateProduct( product );
        activateHoverProduct( product );
    };
    const hoverProduct = ( e, product, action ) => {
        if ( activeProduct ) {
            return false;
        }
        if ( action === 'enter' ) {
            activateHoverProduct( product );
        }
        else {
            activateHoverProduct( null );
        }
    };
    // console.log( 'StorePage.props:', props );
    return (
        <div className={ styles.StorePage }>
            <ProductList 
                { ...props } 
                categories={ props }
                activeProduct={ activeProduct }
                hoverProduct={ hoverProduct }
                activeCategories={ activeCategories }
                selectProduct={ selectProduct }
                selectCategory={ selectCategory } />
            { ( activeProduct || activeHoverProduct ) &&
                <ProductView
                    { ...props }
                    activeProduct={ activeProduct }
                    selectProduct={ selectProduct }
                    activeHoverProduct={ activeHoverProduct } />
            }
            { !activeProduct && !activeHoverProduct && 
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