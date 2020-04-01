

import { 
	GraphQLInt,
	GraphQLFloat,
	GraphQLString,
	GraphQLObjectType, 
} from 'graphql';

import {
	GraphQLDateTime,
} from 'graphql-iso-date';

import {
    globalIdField,
    connectionDefinitions,
} from 'graphql-relay';

import GraphQLUser from './user';
import GraphQLCategory from './category';

import { getCategory } from '../../database/queries/category';;
import { getUser } from '../../database/queries/user';


const GraphQLProduct = new GraphQLObjectType({
	name: 'Product',
	fields: () => ({
		product_id: {
			type: GraphQLInt,
			resolve: root => {
				return root.P_ID
			},
		},
		category: {
			type: GraphQLCategory,
			resolve: root => {
				return getCategory({ id: root.P_Cat_ID })
			},
		},
		brand: {
			type: GraphQLString,
			resolve: ( root ) => {
				return root.P_brand
			},
		},
		name: {
			type: GraphQLString,
			resolve: ( root ) => {
				return root.P_name
			},
		},
		description: {
			type: GraphQLString,
			resolve: ( root ) => root.P_description,
		},
		price: {
			type: GraphQLFloat,
			resolve: ( root ) => root.P_price,
		},
		quantity: {
			type: GraphQLInt,
			resolve: ( root ) => root.P_quantity,
		},
		threshold: {
			type: GraphQLInt,
			resolve: ( root ) => root.P_threshold,
		},
		created_at: {
			type: GraphQLDateTime,
			resolve: ( root ) => root.P_createdAt,
		},
		created_by: {
			type: GraphQLUser,
			resolve: ( root ) => {
				return getUser({ id: root.P_Cus_ID })
			}
		}
	}),
});

export const {
	connectionType: ProductConnection,
	edgeType: GraphQLProductEdge,
} = connectionDefinitions({
	name: 'Product',
	nodeType: GraphQLProduct,
});

export default GraphQLProduct;