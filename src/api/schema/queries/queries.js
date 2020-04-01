
import { 
	GraphQLID,
	GraphQLInt,
	GraphQLBoolean,
	GraphQLFloat,
	GraphQLString,
	GraphQLObjectType, 
	GraphQLNonNull,
	GraphQLList,
} from 'graphql';

import {
	connectionArgs,
	connectionFromArray,
	connectionFromPromisedArray,
} from 'graphql-relay';

import {
	GraphQLDateTime,
} from 'graphql-iso-date';

import { getCategory, getCategoryList } from '../../database/queries/category';
import { getProduct, getProductList, getProductsByCategoryName } from '../../database/queries/product';
import { getUser, searchUsers } from '../../database/queries/user';
import { getAllEmployees } from '../../database/queries/employee';
import { getAllInventoryOrders } from '../../database/queries/inventory';

import GraphQLCategory from '../types/category';
import GraphQLUser, { UserConnection } from '../types/user';
import GraphQLProduct, { ProductConnection } from '../types/product';
import GraphQLInventoryOrder, { InventoryOrderConnection } from '../types/inventory_order';

export const CategoriesQuery = {
	type: new GraphQLList( GraphQLCategory ),
	args: {
	},
	resolve: ( root, args ) => {
		// console.log( 'args:', args );
		return getCategoryList( args )
	}
};

export const CategoryListQuery = {
	type: new GraphQLList( GraphQLCategory ),
	args: {
		first: { type: GraphQLInt }
	},
	resolve: ( root, args, context ) => {
		return getCategoryList( args )
	}
};

export const ProductQuery = {
	type: GraphQLProduct,
	args: {
		product_id: { type: GraphQLInt },
		name: { type: GraphQLString },
	},
	resolve: ( root, args ) => {
		console.log( 'args:', args );
		const { product_id } = args;
		return getProduct({ id: product_id })
	}
};

export const ProductListQuery = {
	type: ProductConnection,
	args: {
		first: { type: GraphQLInt }
	},
	resolve: ( root, args, context ) => {
		return connectionFromPromisedArray( getProductList( args ), args )
	}
};

export const UserSearchQuery = {
	type: UserConnection,
	args: {
		query: { type: GraphQLString },
		first: { type: GraphQLInt },
	},
	resolve: ( root, args, context ) => {
		// console.log( 'args:', args );
		return connectionFromPromisedArray( searchUsers( args ), args );
	}
};

export const EmployeeQuery = {
	type: UserConnection,
	args: {
		query: { type: GraphQLString },
		first: { type: GraphQLInt },
	},
	resolve: ( root, args, context ) => {
		// console.log( 'args:', args );
		return connectionFromPromisedArray( getAllEmployees( args ), args );
	}
};

export const ViewerQuery = {
	type: GraphQLUser,
	args: {
		id: { type: GraphQLInt },
	},
	resolve: ( root, args, context ) => {
		// console.log( 'args:', args );
		return getUser( args );
	}
};

export const InventoryOrderQuery = {
	type: InventoryOrderConnection,
	args: {
		first: { type: GraphQLInt },
	},
	resolve: ( root, args, context ) => {
		// console.log( 'args:', args );
		return connectionFromPromisedArray( getAllInventoryOrders( args ), args );
	}
};