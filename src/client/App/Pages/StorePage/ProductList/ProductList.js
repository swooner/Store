
import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import { graphql, createFragmentContainer } from 'react-relay';
import styles from '../StorePage.css';

const cx = classnames.bind( styles );

const ProductList = ( props ) => {
    let { categories, activeCategories } = props;
    categories = categories.categories;
    // console.log( 'activeCategories:', activeCategories );
    // console.log( 'ProductList props:', props );
    return (
        <div className={ styles.ProductList }>
            { categories ? categories.map(( category, i ) => {
                const { name, description, products } = category;
                const className = cx(
                    'Category', {
                        'Category--state-active': activeCategories[ name ] ? activeCategories[ name ].isActive : false
                    }
                );
                return (
                    <div key={ i } className={ className } onClick={ () => props.selectCategory( category ) }>
                        <div className={ styles.Header }>
                            <div className={ styles.Indicator }></div>
                            <div className={ styles.Name }>{ name }</div>
                        </div>
                        { activeCategories[ name ] && activeCategories[ name ].isActive &&
                            <div className={ styles.Body }>
                                <Products products={ products } selectProduct={ props.selectProduct } />
                            </div>
                        }
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
                    <div key={ i } className={ styles.Product } onClick={ ( e ) => selectProduct( e, product ) }>
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
                            picture_url
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