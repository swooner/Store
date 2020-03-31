
import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import CategoriesPage from './CategoriesPage/CategoriesPage';
import ProductsPage from './ProductsPage/ProductsPage';
import EmployeesPage from './EmployeesPage/EmployeesPage';
import styles from './PortalPage.css';
import InventoryOrdersPage from './InventoryOrdersPage/InventoryOrdersPage';

const PortalPage = ( props ) => {
    const { viewer } = props;
    const { employee_info } = viewer;
    return (
        <div className={ styles.PortalPage }>
            <div>Portal Page</div>
            <Switch>
                <Route path='/portal/employees' render={ () => {
                    return (
                        <EmployeesPage
                            { ...props }
                            employee_list={ props } />
                    )
                }} />
                <Route path='/portal/categories' render={ () => {
                    return (
                        <CategoriesPage
                            { ...props }
                            category_list={ props } />
                    )
                }} />
                <Route path='/portal/products' render={ () => {
                    return (
                        <ProductsPage
                            { ...props }
                            product_list={ props } />
                    )
                }} />
                <Route path='/portal/inventory-orders' render={ () => {
                    return (
                        <InventoryOrdersPage
                            { ...props }
                            inventory_orders_list={ props } />
                    )
                }} />
            </Switch>
        </div>
    )
};

export default PortalPage;