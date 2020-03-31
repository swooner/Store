
import React, { Component } from 'react';
import ProductList from './ProductList/ProductList';
import styles from './HomePage.css';

const Home = ( props ) => {
    return (
        <div className={ styles.HomePage }>
            <div>Home page</div>
            <ProductList 
                { ...props } 
                category_product_list={ props } />
        </div>
    )
};

export default Home;