

import { 
	GraphQLInt,
	GraphQLFloat,
	GraphQLString,
	GraphQLList,
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
import { getProductSizes } from '../../database/queries/product';


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
		sizes: {
			type: new GraphQLList( ProductSize ),
			resolve: ( root ) => {
				return getProductSizes({ product_id: root.P_ID })
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
		},
		picture_url: {
			type: GraphQLString,
			resolve: ( root ) => {
				return root.P_picture
			}
		}
	}),
});

export const ProductSize = new GraphQLObjectType({
	name: 'ProductSize',
	fields: () => ({
		product_size_id: {
			type: GraphQLInt,
			resolve: ( root ) => {
				return root.PS_ID
			},
		},
		name: {
			type: GraphQLString,
			resolve: ( root ) => {
				return root.PS_name
			},
		},
		surcharge: {
			type: GraphQLFloat,
			resolve: ( root ) => root.PS_surcharge,
		},
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