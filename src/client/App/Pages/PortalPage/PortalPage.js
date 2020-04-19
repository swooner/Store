import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import CategoriesPage from "./CategoriesPage/CategoriesPage";
import ProductsPage from "./ProductsPage/ProductsPage";
import EmployeesPage from "./EmployeesPage/EmployeesPage";
import ReportPage from "./ReportPage/ReportPage";
import InventoryOrdersPage from "./InventoryOrdersPage/InventoryOrdersPage";
import styles from "./PortalPage.css";

const PortalPage = props => {
  console.log("props from ProtalPage: ", props);
  const { viewer } = props;
  console.log("viewer from ProtalPage: ", viewer);
  const { employee_info } = viewer;
  return (
    <div className={styles.PortalPage}>
      <div>Portal Page</div>
      <Switch>
        <Route
          path="/portal/employees"
          render={() => {
            return <EmployeesPage {...props} employee_list={props} />;
          }}
        />
        <Route
          path="/portal/categories"
          render={() => {
            return <CategoriesPage {...props} category_list={props} />;
          }}
        />
        <Route
          path="/portal/products"
          render={() => {
            return <ProductsPage {...props} product_list={props} />;
          }}
        />
        <Route
          path="/portal/inventory-orders"
          render={() => {
            return (
              <InventoryOrdersPage {...props} inventory_orders_list={props} />
            );
          }}
        />
        <Route
          path="/portal/report"
          render={() => {
            return <ReportPage {...props} report_data_by_month={props} />;
          }}
        />
      </Switch>
    </div>
  );
};

export default PortalPage;
