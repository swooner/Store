
import { 
	GraphQLInt,
	GraphQLList,
	GraphQLFloat,
	GraphQLString,
	GraphQLObjectType,
} from 'graphql';

import GraphQLProduct from './product';

import { getProduct, getProductSize } from '../../database/queries/product';
import { getCartItems } from '../../database/queries/cart';
import { ProductSize } from './product';


const Cart = new GraphQLObjectType({
	name: 'Cart',
	fields: () => ({
		order_id: {
			type: GraphQLInt,
			resolve: root => {
				return root.O_ID
			}
		},
		items: {
			type: new GraphQLList( CartItem ),
			resolve: ( root ) => {
				// console.log( 'root:', root );
				return getCartItems({ order_id: root.O_ID })
			}
		},
		total: {
			type: GraphQLFloat,
			resolve: root => {
				return root.total
			}
		}
	})
});

const CartItem = new GraphQLObjectType({
	name: 'CartItem',
	fields: () => ({
		product: {
			type: GraphQLProduct,
			resolve: ( root ) => {
				return getProduct({ id: root.OI_P_ID })
			}
		},
		size: {
			type: ProductSize,
			resolve: ( root ) => {
				return getProductSize({ id: root.OI_PS_ID })
			}
		},
		quantity: {
			type: GraphQLInt,
			resolve: ( root ) => {
				return root.OI_quantity
			}
		},
		cost: {
			type: GraphQLFloat,
			resolve: root => {
				return root.totalCost
			}
		}
	})
});

export default Cart;