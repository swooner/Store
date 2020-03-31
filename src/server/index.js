
import express from 'express';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import schema from '../api/schema/schema.js';

const app = express( );

app.use( express.static( 'public' ) );

app.use( cors( ) );

app.use( '/graphql', graphqlHTTP({
    schema: schema,
    pretty: true,
    graphiql: true,
}));

app.listen( 8080, () => {
    console.log( "Running store server on port 8080." )
});