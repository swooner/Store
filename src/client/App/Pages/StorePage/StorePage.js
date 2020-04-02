
import React, { useState } from 'react';
import ProductList from './ProductList/ProductList';
import ActiveProduct from './ActiveProduct/ActiveProduct';
import Cart from './Cart/Cart';
import styles from './StorePage.css';

const Store = ( props ) => {
    const [ activeCategory, activateCategory ] = useState( );
    const [ activeProduct, activateProduct ] = useState( );
    const selectCategory = ( category ) => {
        activateCategory( category );
    };
    const selectProduct = ( product ) => {
        activateProduct( product );
    };
    const { viewer } = props;
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
                    activeProduct={ activeProduct } />
            }
            { viewer &&
                <Cart 
                    { ...props }
                    cart={ viewer }/>
            }
        </div>
    )
};

export default Store;