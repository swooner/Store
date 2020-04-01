
import React from 'react';
import styles from '../StorePage.css';

const ActiveProduct = ( props ) => {
    const { activeProduct } = props;
    const { name, description, price } = activeProduct;
    return (
        <div className={ styles.ActiveProduct }>
            <div className={ styles.name }>{ name }</div>
            <div className={ styles.description }>{ description }</div>
            <div className={ styles.price }>${ price }</div>
        </div>
    )
};

export default ActiveProduct;