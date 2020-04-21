import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Menu from "./Menu";
import CategoriesPage from "./CategoriesPage/CategoriesPage";
import ProductsPage from "./ProductsPage/ProductsPage";
import EmployeesPage from "./EmployeesPage/EmployeesPage";
import ReportPage from "./ReportPage/ReportPage";
import InventoryOrdersPage from "./InventoryOrdersPage/InventoryOrdersPage";
import styles from "./PortalPage.css";

const PortalPage = props => {
  // console.log("props from ProtalPage: ", props);
  const { viewer } = props;
  // console.log("viewer from ProtalPage: ", viewer);
  const { employee_info } = viewer;
  return (
    <div className={styles.PortalPage}>
      <Switch>
        <Route
          exact path="/portal"
          render={() => {
            return <Menu {...props} />;
          }}
        />
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
            return viewer && ( viewer.role == 'manager' || viewer.role == 'inventory' ) ? (
              <InventoryOrdersPage {...props} pending_orders_list={props} filled_orders_list={props} />
            ) : <Redirect to={ '/' } />;
          }}
        />
        <Route
          path="/portal/reports"
          render={() => {
            return (
              <ReportPage
                {...props}
                report_data_by_month={props}
                each_product_report_data_by_month={props}
              />
            );
          }}
        />
      </Switch>
    </div>
  );
};

export default PortalPage;
