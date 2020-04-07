
import React, { useState, useEffect } from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import styles from '../StorePage.css';

const ProductList = ( props ) => {
    let { categories } = props;
    categories = categories.categories;
    // console.log( 'ProductList props:', props );
    return (
        <div className={ styles.ProductList }>
            { categories ? categories.map(( category, i ) => {
                const { name, description, products } = category;
                return (
                    <div key={ i } className={ styles.Category } onClick={ () => props.selectCategory( category ) }>
                        <div className={ styles.Header }>
                            <div className={ styles.Indicator }></div>
                            <div className={ styles.Name }>{ name }</div>
                        </div>
                        <div className={ styles.Body }>
                            <Products products={ products } selectProduct={ props.selectProduct } />
                        </div>
                    </div>
                )
            }): [] }
        </div>
    )
};


const Products = ({ products, selectProduct }) => {
    return (
        <div className={ styles.Products }>
            { products.edges.map(( product, i ) => {
                product = product.node;
                const { name } = product;
                return (
                    <div key={ i } className={ styles.Product } onClick={ () => selectProduct( product ) }>
                        <div className={ styles.Name }>{ name }</div>
                        <div className={ styles.Quantity }></div>
                    </div>
                )
            }) }
        </div>
    )
};

export default createFragmentContainer( ProductList, {
    categories: graphql`
        fragment ProductList_categories on Query {
            categories {
                name
                description
                products ( first: 10 ) @connection ( key: "ProductList_products" ) {
                    edges {
                        node {
                            product_id
                            category {
                                name
                            }
                            name
                            description
                            price
                            sizes {
                                product_size_id
                                name
                                surcharge
                            }
                        }
                    }
                }
            }
        }
    `
});