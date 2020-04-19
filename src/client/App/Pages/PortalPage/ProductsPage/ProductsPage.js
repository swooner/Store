import React, { Component } from "react";
import { graphql, createFragmentContainer } from "react-relay";
import { Switch, Route, Link } from "react-router-dom";
import SubmitButton from "../../../Components/SubmitButton/SubmitButton";
import AddProduct from "./AddProduct";
import DeleteProductMutation from "../mutations/DeleteProductMutation";
import styles from "../PortalPage.css";

const ProductPage = props => {
  console.log("[ProductPage] props: ", props);
  const deleteProduct = product => {
    const { product_id } = product;
    const form = {
      product_id
    };
    DeleteProductMutation.commit(form);
  };
  const renderProducts = () => {
    const { product_list } = props.product_list;
    return product_list
      ? product_list.edges.map((product, i) => {
          // <Product> component is created below
          return (
            <Product
              key={i}
              product={product.node}
              deleteProduct={deleteProduct}
            />
          );
        })
      : [];
  };
  // console.log( 'ProductListPage props:', props );
  return (
    <div className={styles.ProductPage}>
      <div className={styles.Title}>Portal Products Page</div>
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
      {renderProducts()}
    </div>
  );
};

const Product = ({ product, deleteProduct }) => {
  // console.log( 'product:', product );
  return (
    <div className={styles.Product}>
      <div className={styles.Name}>{product.name}</div>
      <div className={styles.Description}>{product.description}</div>
      <div className={styles.Price}>{product.price}</div>
      <div className={styles.Quantity}>quantity: {product.quantity}</div>
      <div className={styles.Threshold}>threshold: {product.threshold}</div>
      <div className={styles.TestElement}>Noble</div>
      <SubmitButton
        style={"delete"}
        onClick={() => deleteProduct(product)}
        text={"Delete"}
      />
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
