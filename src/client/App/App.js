import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../helpers/relay-environment";
import { Link, useLocation, useHistory } from "react-router-dom";
import SiteNav from "./Components/SiteNav/SiteNav";
import Routes from "./Routes";
import styles from "./App.css";

const App = () => {
  let storage_viewer = localStorage.getItem("ACTIVE_USER");
  storage_viewer = storage_viewer ? JSON.parse(storage_viewer) : null;
  const user_id = storage_viewer ? storage_viewer.user_id : null;
  // console.log( 'user_id:', user_id );

  // react-router provides a function for getting the location from the Javascript Browser API.
  // We could just as easily use window.location, but react-router's lcoation allows for passing a state object
  // from page to page, so I think it's better for this app.
  const location = useLocation();
  // console.log( 'location:', location );
  const { pathname } = location;
  const [, ...paths] = pathname.split("/");
  let isProductPage = false;
  let isStorePage = false;
  let isCheckoutPage = false;
  let category_name = "";
  let isPortalPage = false;
  let isCategoriesPage = false;
  let isProductsPage = false;
  let isEmployeesPage = false;
  let isAddEmployeePage = false;
  let isAddProductPage = false;
  let isInventoryOrdersPage = false;
  let product_id;
  let page = paths[0];
  let isReportPage = false;
  // when a user goes to the page for viewing specific products, we assign the product's id that is
  // passed in the url and feed to our API.
  console.log("paths:", paths);
  if (page === "portal") {
    isPortalPage = true;
    if (paths[1] === "employees") {
      isEmployeesPage = true;
      if (paths[2] === "add-employee") {
        isAddEmployeePage = true;
      }
    }
    if (paths[1] === "categories") {
      isCategoriesPage = true;
    }
    if (paths[1] === "products") {
      isProductsPage = true;
      if (paths[2] === "add-product") {
        isAddProductPage = true;
      }
    }
    if (paths[1] === "inventory-orders") {
      isInventoryOrdersPage = true;
    }
    if (paths[1] === "report") {
      isReportPage = true;
    }
  } else if (page === "checkout") {
    isCheckoutPage = true;
  } else {
    isStorePage = true;
    category_name = "Burgers";
  }
  // console.log( 'product_id:', product_id );
  // <QueryRenderer> here is for bridging our API to our views. Whenever we need data from our
  // database, we create an object in the page file and paste the name of that object into AppQuery below.
  // As you can see the object name is structured as <NameOfFile>_<DataYouDesire>
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query AppQuery(
          $user_id: Int
          $isStorePage: Boolean!
          $isCheckoutPage: Boolean!
          $isEmployeesPage: Boolean!
          $isAddProductPage: Boolean!
          $isAddEmployeePage: Boolean!
          $isCategoriesPage: Boolean!
          $isProductsPage: Boolean!
          $isInventoryOrdersPage: Boolean!
          $isReportPage: Boolean!
        ) {
          viewer(id: $user_id) {
            user_id
            employee_info {
              role
            }
            ...StorePage_viewer @include(if: $isStorePage)
            ...CheckoutPage_viewer @include(if: $isCheckoutPage)
          }
          # This object fragment is found in ProductPage.js. The product_id from the
          # url is passed to it
          ...ProductList_categories @include(if: $isStorePage)

          ...AddEmployee_user_search @include(if: $isAddEmployeePage)
          ...EmployeesPage_employee_list @include(if: $isEmployeesPage)
          ...CategoriesPage_category_list @include(if: $isCategoriesPage)
          ...ProductsPage_product_list @include(if: $isProductsPage)
          ...AddProduct_category_list @include(if: $isAddProductPage)
          ...InventoryOrdersPage_inventory_order_list
            @include(if: $isInventoryOrdersPage)
          # ...ReportPage_report_data @include(if: $isReportPage)
          ...ReportPage_report_data_by_month @include(if: $isReportPage)
          ...ReportPage_each_product_report_data_by_month
            @include(if: $isReportPage)
          # ...ReportPage_report_data_by_month_refetch @include(if: $isReportPage)
        }
      `}
      variables={{
        user_id,
        isStorePage,
        isProductsPage,
        isEmployeesPage,
        isAddEmployeePage,
        isAddProductPage,
        isCategoriesPage,
        isCheckoutPage,
        isInventoryOrdersPage,
        isReportPage
      }}
      render={({ error, props }) => {
        if (error) {
          console.log("error:", error);
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        console.log("[App.js] props:", props);
        const { viewer } = props;
        console.log("[App.js] Viewer:", viewer);
        return (
          /* styles.App references the import styles statement above. Since global styling is bad practice, our styling will be
                    component-based. if you want to style an element, you need to match that element directly to a specific stylesheet. 
                    The stylesheet for this component is called App.css and is imported at the top of this file. In the App.css file, 
                    you would then style like normal  */
          <div className={styles.App}>
            <SiteNav viewer={viewer} isPortalPage={isPortalPage} />
            <Routes {...props} viewer={viewer} />
          </div>
        );
      }}
    />
  );
};

export default App;
