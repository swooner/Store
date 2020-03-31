
import React, { useState, useEffect } from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import styles from '../HomePage.css';

const ProductList = ( props ) => {
    const { category_product_list } = props;
    console.log( 'category_product_list:', category_product_list );
    return (
        <div className={ styles.ProductList }>
            { category_product_list ? category_product_list.category_product_list.edges.map(( product, i ) => {
                product = product.node;
                const { name } = product;
                return (
                    <div key={ i } className={ styles.Name }>{ name }</div>
                )
            }): [] }
        </div>
    )
};

export default createFragmentContainer( ProductList, {
    category_product_list: graphql`
        fragment ProductList_category_product_list on Query @argumentDefinitions (
            first: { type: "Int" },
            category_name: { type: "String" }
        ) {
            category_product_list ( category_name: $category_name, first: 10 ) @connection ( key: "ProductList_category_product_list" ) {
                edges {
                    node {
                        category {
                            name
                        }
                        name
                        description
                        price
                    }
                }
            }
        }
    `
});