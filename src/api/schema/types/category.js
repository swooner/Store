
import { 
	GraphQLInt,
	GraphQLString,
	GraphQLObjectType, 
} from 'graphql';

import {
	connectionArgs,
	connectionFromPromisedArray
} from 'graphql-relay';

import { ProductConnection } from './product';

import { getProductsByCategoryId } from '../../database/queries/product';


const GraphQLCategory = new GraphQLObjectType({
	name: 'Category',
	fields: () =>  ({
		category_id: {
			type: GraphQLInt,
			resolve: root => {
				return root.Cat_ID
			},
		},
		name: {
			type: GraphQLString,
			resolve: ( root ) => root.Cat_name,
		},
		description: {
			type: GraphQLString,
			resolve: ( root ) => root.Cat_description,
		},
		products: {
			type: ProductConnection,
			args: {
				...connectionArgs,
			},
			resolve: ( root, args ) => {
				return (
					connectionFromPromisedArray( getProductsByCategoryId({ category_id: root.Cat_ID }), args )
				)
			}
		},
  	})
});

export default GraphQLCategory;