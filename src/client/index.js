
import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router,
} from 'react-router-dom';
import App from './App/App';


// The <Router> is the parent for all of the routes. It tracks
// the location URL data, browser history, etc. It is from react-router,
// the official routing package that works with React

// The <App> is the where the actual app with all our pages lives.

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById( 'root' )
);