

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
    getProducts,
} from '../database/queries/product';

import {
    ProductsConnection
} from './queries/ProductQuery';
  
const { nodeInterface, nodeField } = nodeDefinitions(
    globalId => {
        const { type, id } = fromGlobalId( globalId );
        if ( type === 'Category' ) {
            return getCategory( id );
        } 
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
  
const GraphQLCategory = new GraphQLObjectType({
    name: 'Category',
    interfaces: [ nodeInterface ],
    fields: {
        id: globalIdField( 'Category' ),
        name: {
            type: new GraphQLNonNull( GraphQLString ),
            resolve: ( root ) => root.name,
        },
        products: {
            type: ProductsConnection,
            args: {
                ...connectionArgs,
            },
            resolve: ( root, { status, after, before, first, last } ) =>
                connectionFromArray( [ ...getProducts( root.name ) ], {
                    after,
                    before,
                    first,
                    last,
                }),
        },
    },
});
  
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
  
  export { nodeField, GraphQLCategory, GraphQLProduct };