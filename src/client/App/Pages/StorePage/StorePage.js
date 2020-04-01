
import React, { useState } from 'react';
import ProductList from './ProductList/ProductList';
import ActiveProduct from './ActiveProduct/ActiveProduct';
import Cart from './Cart/Cart';
import styles from './StorePage.css';

const Store = ( props ) => {
    const [ activeProduct, activateProduct ] = useState( );
    const selectProduct = ( product ) => {
        activateProduct( product );
    };
    return (
        <div className={ styles.StorePage }>
            <ProductList 
                { ...props } 
                categories={ props }
                selectProduct={ selectProduct } />
            { activeProduct &&
                <ActiveProduct
                    { ...props }
                    activeProduct={ activeProduct } />
            }
            <Cart />
        </div>
    )
};

export default Store;