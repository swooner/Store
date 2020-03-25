
import React, { Component } from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Link } from 'react-router-dom';
import styles from './ProductListPage.css';

const ProductListPage = ( props ) =>  {
    const renderProducts = ( ) => {
        const { productList } = props.productList;
        return productList.edges.map(( product, i ) => {
            // <Product> component is created below
            return (
                <Product key={ i } product={ product.node } />
            )
        })
    }
    // console.log( 'ProductListPage props:', props );
    return (
        <div className={ styles.ProductListPage }>
            <div className={ styles.Title }>Product List Page</div>
            { renderProducts() }
        </div>
    )
};

const Product = ({ product }) => {
    // console.log( 'product:', product );
    return (
        <Link to={ `/store/product/${ product.product_id }` }>
            <div className={ styles.Product }>
                <div className={ styles.Brand }>{ product.brand }</div>
                <div className={ styles.Name }>{ product.name }</div>
                <div className={ styles.Description }>{ product.description }</div>
                <div className={ styles.Price }>{ product.price }</div>
            </div>
        </Link>
    )
};



// Here, we are creating the object that we paste in <QueryRenderer> in App.js. This page
// needs a product list, so we request the first 10 products from the database
// and get the name and price

export default createFragmentContainer( ProductListPage, {
    productList: graphql`
        fragment ProductListPage_productList on Query @argumentDefinitions (
            first: { type: "Int" }
        ) {
            productList ( first: 10 ) @connection( key: "ProductListPage_productList" ) {
                edges {
                    node {
                        product_id
                        brand
                        name
                        price
                    }
                }
            }
        }
    `
});