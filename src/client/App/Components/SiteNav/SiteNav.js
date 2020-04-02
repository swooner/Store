
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SiteNav.css';


const SiteNav = ( props ) => {
    const { viewer, isPortalPage } = props;
    const employee_info = viewer ? viewer.employee_info : null;
    console.log( 'viewer:', viewer );
    return (
        <nav className={ styles.SiteNav }>
            <ul className={ styles.HomeNav }>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            { !isPortalPage ? (
                <ul className={ styles.StandardNav }>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/store">Store</Link>
                    </li>
                    { viewer && ( employee_info.role === 'manager' || employee_info.role === 'inventory'  || employee_info.role === 'employee' ) &&
                        <li>
                            <Link to="/portal">Portal</Link>
                        </li>
                    }
                </ul>
            ) : (
                <ul className={ styles.EmployeeNav }>
                    { employee_info.role === 'manager' &&
                        <li>
                            <Link to={ '/portal/employees' }>Employees</Link>
                        </li>
                    }
                    <li>
                        <Link to={ '/portal/categories' }>Categories</Link>
                    </li>
                    <li>
                        <Link to={ '/portal/products' }>Products</Link>
                    </li>
                    { ( employee_info.role === 'manager' && employee_info.role === 'inventory' ) &&
                        <li>
                            <Link to={ '/portal/inventory-orders' }>Orders</Link>
                        </li>
                    }
                </ul>
            )}
            <ul className={ styles.AuthNav }>
                { !viewer &&
                    <li>
                        <Link to="/sign-up">Sign up</Link>
                    </li>
                }
                { !viewer &&
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                }
                { viewer &&
                    <li>
                        <Link to="/sign-out">Sign out</Link>
                    </li>
                }
            </ul>
        </nav>
    )
};

export default SiteNav;