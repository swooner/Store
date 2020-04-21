
import React from "react";
import { Link } from 'react-router-dom';
import styles from "./PortalPage.css";

const Menu = props => {
  // console.log("props from ProtalPage: ", props);
  const { viewer } = props;
  const { employee_info } = viewer;
  // console.log("viewer from ProtalPage: ", viewer);
  return (
    <div className={styles.MenuPage}>
        <div className={ styles.Grid }>
            { employee_info.role == 'manager' &&
                <Link className={ styles.Square } to={ '/portal/employees' }>
                    <div className={ styles.Name }>Employees</div>
                </Link>
            }
            { employee_info.role == 'manager' &&
                <Link className={ styles.Square } to={ '/portal/reports' }>
                    <div className={ styles.Name }>Reports</div>
                </Link>
            }
            <Link className={ styles.Square } to={ '/portal/categories' }>
                <div className={ styles.Name }>Categories</div>
            </Link>
            <Link className={ styles.Square } to={ '/portal/products' }>
                <div className={ styles.Name }>Products</div>
            </Link>
            { employee_info.role == 'inventory' &&
                <Link className={ styles.Square } to={ '/portal/inventory-orders' }>
                    <div className={ styles.Name }>Inventory</div>
                </Link>
            }
        </div>
    </div>
  );
};

export default Menu;
