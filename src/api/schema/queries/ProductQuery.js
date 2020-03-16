
import { 
    GraphQLID, 
    GraphQLString, 
    GraphQLInt 
} from 'graphql';
import {
    connectionArgs,
    connectionDefinitions,
    connectionFromArray,
} from 'graphql-relay';
import { GraphQLProduct } from '../nodes.js';
import { Product, getProductOrThrow } from '../../database/queries/product.js';

const ProductQuery = {
    type: GraphQLProduct,
    args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        price: { type: GraphQLInt },
    },
    resolve: ( root, args ) => {
        // console.log( 'args:', args );
        return getProductOrThrow( args )
    }
};

const {
    connectionType: ProductsConnection,
    edgeType: GraphQLProductEdge,
  } = connectionDefinitions({
    name: 'Product',
    nodeType: GraphQLProduct,
});

export { ProductQuery, ProductsConnection, GraphQLProductEdge } ;