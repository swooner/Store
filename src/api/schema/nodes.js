

import {
    GraphQLBoolean,
    // GraphQLInt,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';
  
import {
    connectionArgs,
    connectionDefinitions,
    connectionFromArray,
    fromGlobalId,
    globalIdField,
    nodeDefinitions,
} from 'graphql-relay';

import {
    getProductOrThrow,
} from '../database/queries/product';
  
const { nodeInterface, nodeField } = nodeDefinitions(
    globalId => {
        const { type, id } = fromGlobalId( globalId );
        if ( type === 'Product' ) {
            return getProductOrThrow( id );
        } 
        return null;
    },
    obj => {
        if ( obj instanceof Product ) {
            return GraphQLProduct;
        }
        return null;
    },
);
  
const GraphQLProduct = new GraphQLObjectType({
    name: 'Product',
    interfaces: [ nodeInterface ],
    fields: {
        id: globalIdField( 'Product' ),
        name: {
            type: new GraphQLNonNull( GraphQLString ),
            resolve: ( product ) => product.name,
        },
        in_stock: {
            type: new GraphQLNonNull( GraphQLBoolean ),
            resolve: ( product ) => product.in_stock,
        },
    },
  });
  
  export { nodeField, GraphQLProduct };