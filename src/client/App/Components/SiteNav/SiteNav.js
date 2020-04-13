import React from "react";
import { Link } from "react-router-dom";
import styles from "./SiteNav.css";

const SiteNav = (props) => {
  const { viewer, isPortalPage } = props;
  const employee_info = viewer ? viewer.employee_info : null;
  // console.log( 'viewer:', viewer );
  return (
    <nav
      className={
        "navbar navbar-expand-lg navbar-light " + styles.SiteNav
      }
      style={{padding: 0}}
    >
      <a className={styles.Brand} href=".">
        <h3>Calhoun Burger Stop</h3>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={"collapse navbar-collapse " + styles.SiteNav} id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Store
            </Link>
          </li>
          {!isPortalPage ? (
            // <ul className={ styles.StandardNav }>
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              {viewer &&
                employee_info &&
                (employee_info.role === "manager" ||
                  employee_info.role === "inventory" ||
                  employee_info.role === "employee") && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/portal">
                      Portal
                    </Link>
                  </li>
                )}
            </>
          ) : (
            //</ul>
            <>
              {employee_info && employee_info.role === "manager" && (
                <li className="nav-item">
                  <Link className="nav-link" to={"/portal/employees"}>
                    Employees
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link" to={"/portal/categories"}>
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/portal/products"}>
                  Products
                </Link>
              </li>
              {employee_info &&
                employee_info.role === "manager" &&
                  employee_info.role === "inventory" && (
                  <li className="nav-item">
                    <Link className="nav-link" to={"/portal/inventory-orders"}>
                      Orders
                    </Link>
                  </li>
                )}
            </>
          )}
          {/* <ul className={ styles.AuthNav }> */}
          {!viewer && (
            <li className="nav-item">
              <Link className="nav-link" to="/sign-up">
                Sign up
              </Link>
            </li>
          )}
          {!viewer && (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}
          {viewer && (
            <li className="nav-item">
              <Link className="nav-link" to="/sign-out">
                Sign out
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default SiteNav;
