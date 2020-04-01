
import { 
	GraphQLInt,
	GraphQLList,
	GraphQLFloat,
	GraphQLString,
	GraphQLObjectType,
} from 'graphql';

import GraphQLProduct from './product';


const Cart = new GraphQLObjectType({
	name: 'Cart',
	fields: () => ({
		items: {
			type: new GraphQLList( CartItem ),
			resolve: ( root ) => {
				return getCartItems({ cart_id: root.O_ID })
			}
		},
		total: {
			type: GraphQLFloat,
			resolve: root => {
				return calculateTotalPrice()
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
				return getProduct({ id: root.O_P_ID })
			}
		},
		size: {
			type: GraphQLString,
			resolve: ( root ) => {
				return root.OI_size
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
				return calculateCartItemCost()
			}
		}
	})
});

export default Cart;