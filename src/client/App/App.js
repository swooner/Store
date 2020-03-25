
import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../helpers/relay-environment';
import {
    Link,
    useLocation,
} from 'react-router-dom';
import Routes from './Routes';
import styles from './App.css';

const App = ( ) => {
    const viewer = localStorage.getItem( 'ACTIVE_USER' );
    // react-router provides a function for getting the location from the Javascript Browser API. 
    // We could just as easily use window.location, but react-router's lcoation allows for passing a state object
    // from page to page, so I think it's better for this app.
    const location = useLocation( );
    // console.log( 'location:', location );
    const { pathname } = location;
    const [ ,...paths  ] = pathname.split( '/' )
    let isProductPage, isProductListPage;
    let product_id;
    // when a user goes to the page for viewing specific products, we assign the product's id that is 
    // passed in the url and feed to our API.
    // console.log( 'paths:', paths );
    if ( paths[ 0 ] === 'store' ) {
        isProductListPage = true;
        if ( paths[ 1 ] === 'product' ) {
            isProductPage = true;
            isProductListPage = false;
            product_id = parseInt( paths[ 2 ] );
        }
    }
    // console.log( 'product_id:', product_id );
    // <QueryRenderer> here is for bridging our API to our views. Whenever we need data from our
    // database, we create an object in the page file and paste the name of that object into AppQuery below.
    // As you can see the object name is structured as <NameOfFile>_<DataYouDesire>
    return (
        <QueryRenderer
            environment={ environment }
            query={ graphql`
                query AppQuery (
                    $product_id: Int
                    $isProductPage: Boolean
                    $isProductListPage: Boolean
                ) { 
                    # This object fragment is found in ProductPage.js. The product_id from the
                    # url is passed to it
                    ...ProductPage_product @arguments( product_id: $product_id ) @include ( if: $isProductPage )
                    # This object fragment is found in ProductListPage.js
                    ...ProductListPage_productList @include ( if: $isProductListPage )
                }
            `}
            variables={{
                product_id,
                isProductPage,
                isProductListPage,
            }}
            render={ ( { error, props } ) => {
                if ( error ) {
                    console.log( 'error:', error );
                    return <div>Error!</div>;
                }
                if ( !props ) {
                    return <div>Loading...</div>;
                }
                // console.log( 'props:', props );
                return (
                    /* styles.App references the import styles statement above. Since global styling is bad practice, our styling will be
                    component-based. if you want to style an element, you need to match that element directly to a specific stylesheet. 
                    The stylesheet for this component is called App.css and is imported at the top of this file. In the App.css file, 
                    you would then style like normal  */
                    <div className={ styles.App }>
                        <nav>
                            <ul>
                                { /* The <Link> component is provided by react-router for going to specific pathnames. It works just like <a> */ }
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/store">Store</Link>
                                </li>
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
                                        <Link to="/admin">Admin</Link>
                                    </li>
                                }
                            </ul>
                        </nav>
                        <Routes 
                            { ...props }
                            viewer={ viewer } />
                    </div>
                )
            }}
        />
    )
};

export default App;