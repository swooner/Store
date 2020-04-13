
import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import { graphql, createFragmentContainer } from 'react-relay';
import styles from '../StorePage.css';

const cx = classnames.bind( styles );

const ProductList = ( props ) => {
    let { categories, activeCategories } = props;
    categories = categories.categories;
    console.log( 'activeCategories:', activeCategories );
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
                            <span className={ styles.Name }>{ name }</span>
                        </div>
                        { activeCategories[ name ] && activeCategories[ name ].isActive &&
                            <div className={ styles.Body }>
                                <Products 
                                    { ...props }
                                    products={ products } />
                            </div>
                        }
                    </div>
                )
            }): [] }
        </div>
    )
};


const Products = ({ products, activeProduct, hoverProduct, selectProduct }) => {
    return (
        <div className={ styles.Products }>
            { products.edges.map(( product, i ) => {
                product = product.node;
                const { name } = product;
                const className = cx(
                    'Product', {
                        'Product--state-active': activeProduct && ( activeProduct.name === name )
                    }
                );
                return (
                    <div 
                        key={ i } 
                        className={ className } 
                        onClick={ ( e ) => selectProduct( e, product ) }
                        onMouseEnter={ ( e ) => hoverProduct( e, product, 'enter' ) }
                        onMouseLeave={ ( e ) => hoverProduct( e, product, 'leave' ) }>
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