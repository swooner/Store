
import { 
	GraphQLID,
	GraphQLInt,
	GraphQLBoolean,
	GraphQLFloat,
	GraphQLString,
	GraphQLObjectType, 
	GraphQLSchema,
	GraphQLNonNull,
	// globalIdField,
} from 'graphql';

import {
	fromGlobalId,
	globalIdField,
	nodeDefinitions,
	connectionArgs,
	connectionDefinitions,
	connectionFromArray,
	connectionFromPromisedArray,
	mutationWithClientMutationId,
} from 'graphql-relay';

import { getCategory } from '../database/queries/category';
import { signUp, login } from '../database/mutations/auth';
import { addProduct, deleteProduct } from '../database/mutations/product';
import { getProduct, getProductList } from '../database/queries/product';
import { getCustomer } from '../database/queries/customer';
  

const { nodeInterface, nodeField } = nodeDefinitions(
	globalId => {
		const { type, id } = fromGlobalId( globalId );
		if ( type === 'Category' ) {
			return getCategory( id );
		} 
		if ( type === 'Product' ) {
			return getProduct({ id });
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
  
const GraphQLCustomer = new GraphQLObjectType({
	name: 'Customer',
  	fields: {
	  	customer_id: {
			type: GraphQLInt,
			resolve: root => {
				return root.Cus_ID
			}
		},
		account_name: {
			type: GraphQLString,
			resolve: root => {
				return root.Cus_accName
			}
		},
		is_manager: {
			type: GraphQLBoolean,
			resolve: root => {
				return root.Cus_accName == 'noble' || root.Cus_accName == 'frank'
			}
		},
		is_employee: {
			type: GraphQLBoolean,
			resolve: root => {
				return root.Cus_accName == 'noble' || root.Cus_accName == 'frank'
			}
		},
  	},
});

const GraphQLCategory = new GraphQLObjectType({
	name: 'Category',
	interfaces: [ nodeInterface ],
	fields: {
		id: globalIdField( ),
		name: {
			type: new GraphQLNonNull( GraphQLString ),
			resolve: ( root ) => root.name,
		},
		products: {
			type: ProductConnection,
			args: {
				...connectionArgs,
			},
			resolve: ( root, { status, after, before, first, last } ) =>
				connectionFromArray( [ ...getProductList({ category: root.name }) ], {
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
	// interfaces: [ nodeInterface ],
	fields: {
		product_id: {
			type: GraphQLInt,
			resolve: root => {
				return root.P_ID
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
	},
});


const {
	connectionType: ProductConnection,
	edgeType: GraphQLProductEdge,
} = connectionDefinitions({
	name: 'Product',
	nodeType: GraphQLProduct,
});


const CategoryQuery = {
	type: GraphQLCategory,
	args: {
		id: { type: GraphQLID },
		name: { type: GraphQLString },
	},
	resolve: ( root, args ) => {
		// console.log( 'args:', args );
		return getProductOrThrow( args )
	}
};

const ProductQuery = {
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

const ProductListQuery = {
	type: ProductConnection,
	args: {
		first: { type: GraphQLInt }
	},
	resolve: ( root, args, context ) => {
		return connectionFromPromisedArray( getProductList( args ), args )
	}
};

const Query = new GraphQLObjectType({
	name: 'Query',
	fields: {
		node: nodeField,
		product: ProductQuery,
		productList: ProductListQuery,
	},
}); 














const SignUpMutation = mutationWithClientMutationId({
	name: 'SignUp',
	inputFields: {
		Cus_Fname: { type: GraphQLString },
		Cus_Lname: { type: GraphQLString },
		Cus_accName: { type: GraphQLString },
		Cus_accPass: { type: GraphQLString },
		Cus_address: { type: GraphQLString },
		Cus_city: { type: GraphQLString },
		Cus_state: { type: GraphQLString },
		Cus_zipCode: { type: GraphQLString },
		Cus_phone: { type: GraphQLString },
		Cus_email: { type: GraphQLString },
		Cus_isEmployee: { type: GraphQLBoolean },
	},
	outputFields: {
		customer: {
			type: GraphQLCustomer,
			resolve: ( payload, args, context ) => {
				return getCustomer({ id: payload.Cus_ID })
			}
		},
	},
	mutateAndGetPayload: ( args ) => {
		return signUp( args );
	},
});

const LoginMutation = mutationWithClientMutationId({
  name: 'Login',
  inputFields: {
	  Cus_accName: { type: GraphQLString },
	  Cus_accPass: { type: GraphQLString },
  },
  outputFields: {
	  customer: {
		  type: GraphQLCustomer,
		  resolve: ( payload, args, context ) => {
			//   console.log( 'payload:', payload );
			  return payload//getCustomer({ id: payload.Cus_ID })
		  }
	  },
  },
  mutateAndGetPayload: ( args ) => {
	  return login( args );
  },
});

const AddProductMutation = mutationWithClientMutationId({
	name: 'AddProduct',
	inputFields: {
		name: { type: new GraphQLNonNull( GraphQLString ) },
		in_stock: { type: new GraphQLNonNull( GraphQLBoolean ) },
	},
	mutateAndGetPayload: ( { name, in_stock } ) => {
		const productId = addProduct( name, in_stock );
		return { productId };
	},
});
  

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
	  signUp: SignUpMutation,
	  login: LoginMutation,
	  addProduct: AddProductMutation,
  },
});

export default new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});