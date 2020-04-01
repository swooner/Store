
import { 
	GraphQLInt,
	GraphQLString,
	GraphQLObjectType, 
} from 'graphql';

import {
    connectionDefinitions
} from 'graphql-relay';

import {
	GraphQLDateTime,
} from 'graphql-iso-date';

import { getProduct } from '../../database/queries/product';

import GraphQLProduct from './product';
  

const GraphQLInventoryOrder = new GraphQLObjectType({
	name: 'InventoryOrder',
	fields: () => ({
		order_id: {
			type: GraphQLInt,
			resolve: root => {
				return root.IO_ID
			},
		},
		product: {
			type: GraphQLProduct,
			resolve: root => {
				return getProduct({ id: root.IO_P_ID })
			},
		},
		status: {
			type: GraphQLString,
			resolve: ( root ) => {
				return root.IO_status
			},
		},
		quantity: {
			type: GraphQLInt,
			resolve: ( root ) => root.IO_quantity,
		},
		created_at: {
			type: GraphQLDateTime,
			resolve: ( root ) => root.IO_createdAt,
		},
		received_at: {
			type: GraphQLDateTime,
			resolve: ( root ) => root.IO_receivedAt,
		},
	})
});


export const {
	connectionType: InventoryOrderConnection,
	edgeType: GraphQLInventoryOrderEdge,
} = connectionDefinitions({
	name: 'InventoryOrder',
	nodeType: GraphQLInventoryOrder,
});


export default GraphQLInventoryOrder;