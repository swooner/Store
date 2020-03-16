
import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link 
} from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Listings from './Listings/Listings';
import environment from '../helpers/relay-environment';

class App extends Component {
    render() {
        return (
            <QueryRenderer
                environment={ environment }
                query={ graphql`
                    query AppQuery {
                        product( id: "1" ) {
                            name
                        }  
                    }
                `}
                variables={ { } }
                render={ ( { error, props } ) => {
                    if ( error ) {
                        return <div>Error!</div>;
                    }
                    if ( !props ) {
                        return <div>Loading...</div>;
                    }
                    return (
                        <Router>
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/store">Store</Link>
                                    </li>
                                </ul>
                            </nav>
                            <Switch>
                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route path="/store">
                                    <Listings />
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>
                            </Switch>
                        </Router>
                    )
                }}
            />
        )
    }
};

export default App;