

import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import ProductPage from './Pages/ProductPage/ProductPage';
import ProductListPage from './Pages/ProductListPage/ProductListPage';

const Routes = ( props ) => {
    /* The <Switch> is for grouping multiple routes. If a route matches one of the paths listed
    below, the component that is being returned in that route will be chosen  */
    return (
        <Switch>
            <Route exact path='/store' render={ ( ) => {
                {/* productList={ props.productList } contains the productList data we got from our API */}
                return (
                    <ProductListPage
                        productList={ props } />
                )
            }} />
            <Route path='/store/product/:product_id' render={ () => {
                {/* product={ props.product } contains the product data we got from our API */}
                return (
                    <ProductPage
                        product={ props } />
                )
            }} />
            <Route path='/about' render={ () => {
                return (
                    <AboutPage
                        { ...props } />
                )
            }} />
            <Route exact path='/' render={ () => {
                return (
                    <HomePage
                        { ...props } />
                )
            }} />
            <Route exact path='/login' render={ () => {
                return (
                    <LoginPage
                        { ...props } />
                )
            }} />
            <Route exact path='/sign-up' render={ () => {
                return (
                    <SignUpPage
                        { ...props } />
                )
            }} />
        </Switch>
    )
};

export default Routes;