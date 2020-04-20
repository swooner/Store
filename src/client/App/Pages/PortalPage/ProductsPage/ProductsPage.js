import React, { Component } from "react";
import { graphql, createFragmentContainer } from "react-relay";
import { Switch, Route, Link } from "react-router-dom";
import SubmitButton from "../../../Components/SubmitButton/SubmitButton";
import AddProduct from "./AddProduct";
import DeleteProductMutation from "../mutations/DeleteProductMutation";
import styles from "../PortalPage.css";

const ProductPage = props => {
  // console.log("[ProductPage] props: ", props);
  const deleteProduct = product => {
    const { product_id } = product;
    const form = {
      product_id
    };
    DeleteProductMutation.commit(form);
  };
  const renderProducts = () => {
    const { product_list } = props.product_list;
    let thisCategory = '';
    let newCategory = true;
    return product_list
      ? product_list.edges.map((product, i) => {
          product = product.node;
          const { category } = product;
          const { name: category_name } = category;
          console.log( '*************************' );
          console.log( 'thisCategory:', thisCategory );
          console.log( 'newCategory:', newCategory );
          if ( thisCategory == category_name ) {
            newCategory = false;
          }
          else {
            newCategory = true;
          }
          thisCategory = category_name;
          // <Product> component is created below
          return (
            <Product
              key={i}
              product={product}
              newCategory={ newCategory }
              deleteProduct={deleteProduct}
            />
          );
        })
      : [];
  };
  // console.log( 'ProductListPage props:', props );
  return (
    <div className={styles.ProductPage}>
      <nav>
        <li>
          <Link to={"/portal/products/add-product"}>Add Product</Link>
        </li>
      </nav>
      <Switch>
        <Route
          exact
          path="/portal/products/add-product"
          render={() => {
            return <AddProduct {...props} category_list={props} />;
          }}
        />
      </Switch>
      <div className={ styles.Header }>
        <div className={ styles.Category }>Category</div>
        <div className={ styles.Name }>Name</div>
        <div className={ styles.Price }>Price ($)</div>
        <div className={ styles.Quantity }>Quantity</div>
        <div className={ styles.Threshold }>Threshold</div>
      </div>
      <div className={ styles.Body }>
        {renderProducts()}
      </div>
    </div>
  );
};

const Product = ({ product, newCategory, deleteProduct }) => {
  // console.log( 'product:', product );
  const { category, name: product_name, description, price, quantity, threshold } = product;
  const { name: category_name } = category;
  return (
    <div className={styles.Product}>
      <div className={ styles.Category }>{ newCategory ? category_name: '' }</div>
      <div className={styles.Name}>{product_name}</div>
      {/* <div className={styles.Description}>{description}</div> */}
      <div className={styles.Price}>{price}</div>
      <div className={styles.Quantity}>{quantity}</div>
      <div className={styles.Threshold}>{threshold}</div>
      <div
        className={ styles.DeleteButton }
        onClick={() => deleteProduct(product)}>Delete</div>
    </div>
  );
};

// Here, we are creating the object that we paste in <QueryRenderer> in App.js. This page
// needs a product list, so we request the first 10 products from the database
// and get the name and price

export default createFragmentContainer(ProductPage, {
  product_list: graphql`
    fragment ProductsPage_product_list on Query
      @argumentDefinitions(first: { type: "Int" }) {
      product_list(first: 10) @connection(key: "ProductsPage_product_list") {
        edges {
          node {
            product_id
            category {
              name
            }
            name
            price
            quantity
            threshold
          }
        }
      }
    }
  `
});
