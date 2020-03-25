
import React, { Component } from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import styles from './ProductPage.css';

class ProductPage extends Component {
    render() {
        console.log( 'Product page props:', this.props );
        const { product: _product } = this.props;
        const { product } = _product;
        const { brand, name, description, price } = product;
        return (
            <div className={ styles.ProductPage }>
                <div className={ styles.Name }>Brand: { brand }</div>
                <div className={ styles.Name }>Name: { name }</div>
                <div className={ styles.Description }>Description: { description }</div>
                <div className={ styles.Price }>Price: { price }</div>
            </div>
        )
    }
};


export default createFragmentContainer( ProductPage, {
    product: graphql`
        fragment ProductPage_product on Query @argumentDefinitions (
            product_id: { type: "ID" }
        ) {
            product ( product_id: $product_id ) {
                brand
                name
                description
                price
            }
        }
    `
});