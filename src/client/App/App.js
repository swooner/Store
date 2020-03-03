
import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
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
                    return <div>User ID: { props.product.name }</div>;
                }}
            />
        )
    }
};

export default App;