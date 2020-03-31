
import { 
	GraphQLID,
	GraphQLInt,
	GraphQLBoolean,
	GraphQLFloat,
	GraphQLString,
	GraphQLObjectType, 
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLList,
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

import {
	GraphQLDateTime,
} from 'graphql-iso-date';

import { getCategory, getCategoryList } from '../database/queries/category';
import { getProduct, getProductList, getProductsByCategoryId, getProductsByCategoryName } from '../database/queries/product';
import { getUser, searchUsers } from '../database/queries/user';
import { getEmployee, getAllEmployees } from '../database/queries/employee';
import { getAllInventoryOrders } from '../database/queries/inventory';

import { updateRole } from '../database/mutations/user';
import { signUp, login } from '../database/mutations/auth';
import { deleteEmployee } from '../database/mutations/employee';
import { addCategory, deleteCategory } from '../database/mutations/category';
import { addProduct, deleteProduct } from '../database/mutations/product';
import { deleteInventoryOrder } from '../database/mutations/inventory';
  

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

const EmployeeInfo = new GraphQLObjectType({
	name: 'EmployeeInfo',
	fields: {
		role: {
			type: GraphQLString,
			resolve: ( root ) => {
				return root.E_role
			}
		},
	}
});
  
const GraphQLUser = new GraphQLObjectType({
	name: 'User',
  	fields: {
	  	user_id: {
			type: GraphQLInt,
			resolve: root => {
				return root.Cus_ID
			}
		},
		first_name: {
			type: GraphQLString,
			resolve: root => {
				return root.Cus_Fname
			}
		},
		last_name: {
			type: GraphQLString,
			resolve: root => {
				return root.Cus_Lname
			}
		},
		account_name: {
			type: GraphQLString,
			resolve: root => {
				return root.Cus_accName
			}
		},
		employee_info: {
			type: EmployeeInfo,
			resolve: root => {
				return getEmployee({ id: root.Cus_ID })
			}
		},
  	},
});

export const GraphQLCategory = new GraphQLObjectType({
	name: 'Category',
	// interfaces: [ nodeInterface ],
	fields: {
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
		// products: {
		// 	type: ProductConnection,
		// 	args: {
		// 		...connectionArgs,
		// 	},
		// 	resolve: ( root, args ) => {
		// 		return (
		// 			connectionFromPromisedArray( getProductsByCategoryId({ category_id: root.Cat_ID }), args )
		// 		)
		// 	}
		// },
  	},
});
const GraphQLProduct = new GraphQLObjectType({
	name: 'Product',
	fields: {
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
	},
});

const GraphQLInventoryOrder = new GraphQLObjectType({
	name: 'InventoryOrder',
	fields: {
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
	},
});




export const {
	connectionType: ProductConnection,
	edgeType: GraphQLProductEdge,
} = connectionDefinitions({
	name: 'Product',
	nodeType: GraphQLProduct,
});

export const {
	connectionType: UserConnection,
	edgeType: GraphQLUserEdge,
} = connectionDefinitions({
	name: 'User',
	nodeType: GraphQLUser,
});

export const {
	connectionType: InventoryOrderConnection,
	edgeType: GraphQLInventoryOrderEdge,
} = connectionDefinitions({
	name: 'InventoryOrder',
	nodeType: GraphQLInventoryOrder,
});


const CategoryQuery = {
	type: GraphQLCategory,
	args: {
		category_id: { type: GraphQLID },
		name: { type: GraphQLString },
	},
	resolve: ( root, args ) => {
		// console.log( 'args:', args );
		return getCategory({ id: category_id })
	}
};

const CategoryListQuery = {
	type: new GraphQLList( GraphQLCategory ),
	args: {
		first: { type: GraphQLInt }
	},
	resolve: ( root, args, context ) => {
		return getCategoryList( args )
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

const UserSearchQuery = {
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

const EmployeeQuery = {
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

const ViewerQuery = {
	type: GraphQLUser,
	args: {
		id: { type: GraphQLInt },
	},
	resolve: ( root, args, context ) => {
		// console.log( 'args:', args );
		return getUser( args );
	}
};

const InventoryOrderQuery = {
	type: InventoryOrderConnection,
	args: {
		first: { type: GraphQLInt },
	},
	resolve: ( root, args, context ) => {
		// console.log( 'args:', args );
		return connectionFromPromisedArray( getAllInventoryOrders( args ), args );
	}
};

const CategoryProductListQuery = {
	type: ProductConnection,
	args: {
		first: { type: GraphQLInt },
		category_name: { type: GraphQLString } 
	},
	resolve: ( root, args, context ) => {
		return connectionFromPromisedArray( getProductsByCategoryName( args ), args );
	}
}

const Query = new GraphQLObjectType({
	name: 'Query',
	fields: {
		node: nodeField,
		viewer: ViewerQuery,
		category_product_list: CategoryProductListQuery,

		user_search: UserSearchQuery,
		employee_list: EmployeeQuery,
		category: CategoryQuery,
		category_list: CategoryListQuery,
		product: ProductQuery,
		product_list: ProductListQuery,
		inventory_order_list: InventoryOrderQuery,
	},
}); 














const SignUpMutation = mutationWithClientMutationId({
	name: 'SignUp',
	inputFields: {
		first_name: { type: GraphQLString },
		last_name: { type: GraphQLString },
		account_name: { type: GraphQLString },
		password: { type: GraphQLString },
		address: { type: GraphQLString },
		city: { type: GraphQLString },
		state: { type: GraphQLString },
		zip_code: { type: GraphQLString },
		phone: { type: GraphQLString },
		email: { type: GraphQLString },
		// isEmployee: { type: GraphQLBoolean },
	},
	outputFields: {
		user: {
			type: GraphQLUser,
			resolve: ( payload, args, context ) => {
				return payload//getUser({ id: payload.Cus_ID })
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
	  account_name: { type: GraphQLString },
	  password: { type: GraphQLString },
  },
  outputFields: {
	  user: {
		  type: GraphQLUser,
		  resolve: ( payload, args, context ) => {
			//   console.log( 'payload:', payload );
			  return payload//getUser({ id: payload.Cus_ID })
		  }
	  },
  },
  mutateAndGetPayload: ( args ) => {
	  return login( args );
  },
});

const DeleteEmployeeMutation = mutationWithClientMutationId({
	name: 'DeleteEmployee',
	inputFields: {
		E_Cus_ID: { type: GraphQLInt },
	},
	outputFields: {
		user: {
			type: GraphQLUser,
			resolve: ( payload, args, context ) => {
			  //   console.log( 'payload:', payload );
				return payload//getUser({ id: payload.Cus_ID })
			}
		},
	},
	mutateAndGetPayload: ( args ) => {
		return deleteEmployee( args );
	},
});

const UpdateRoleMutation = mutationWithClientMutationId({
  name: 'UpdateRole',
  inputFields: {
	  E_Cus_ID: { type: GraphQLInt },
	  E_role: { type: GraphQLString },
  },
  outputFields: {
	  user: {
		  type: GraphQLUser,
		  resolve: ( payload, args, context ) => {
			//   console.log( 'payload:', payload );
			  return payload//getUser({ id: payload.Cus_ID })
		  }
	  },
  },
  mutateAndGetPayload: ( args ) => {
	  return updateRole( args );
  },
});

const AddCategoryMutation = mutationWithClientMutationId({
	name: 'AddCategory',
	inputFields: {
		name: { type: new GraphQLNonNull( GraphQLString ) },
		description: { type: GraphQLString },
		employee_id: { type: GraphQLInt },
	},
	outputFields: {
		category: {
			type: GraphQLCategory,
			resolve: ( payload, args, context ) => {
			  	// console.log( 'payload:', payload );
				return payload //getProduct({ id: payload.P_ID })
			}
		},
	},
	mutateAndGetPayload: ( args ) => {
		return addCategory( args );
	},
});

const DeleteCategoryMutation = mutationWithClientMutationId({
	name: 'DeleteCategory',
	inputFields: {
		category_id: { type: GraphQLInt },
	},
	outputFields: {
		category: {
			type: GraphQLCategory,
			resolve: ( payload, args, context ) => {
			  //   console.log( 'payload:', payload );
				return payload//getCategory({ id: payload.Cat_ID })
			}
		},
	},
	mutateAndGetPayload: ( args ) => {
		return deleteCategory( args );
	},
});

const AddProductMutation = mutationWithClientMutationId({
	name: 'AddProduct',
	inputFields: {
		category_id: { type: GraphQLInt },
		name: { type: new GraphQLNonNull( GraphQLString ) },
		description: { type: GraphQLString },
		price: { type: new GraphQLNonNull( GraphQLFloat ) },
		quantity: { type: new GraphQLNonNull(  GraphQLInt ) },
		threshold: { type: new GraphQLNonNull( GraphQLInt ) },
		employee_id: { type: GraphQLInt },
	},
	outputFields: {
		product: {
			type: GraphQLProduct,
			resolve: ( payload, args, context ) => {
			  	// console.log( 'payload:', payload );
				return payload //getCategory({ id: payload.Cat_ID })
			}
		},
	},
	mutateAndGetPayload: ( args ) => {
		// console.log( 'args:', args );
		return addProduct( args );
	},
});
const DeleteProductMutation = mutationWithClientMutationId({
	name: 'DeleteProduct',
	inputFields: {
		product_id: { type: GraphQLInt },
	},
	outputFields: {
		product: {
			type: GraphQLProduct,
			resolve: ( payload, args, context ) => {
			  //   console.log( 'payload:', payload );
				return payload//getProduct({ id: payload.Cat_ID })
			}
		},
	},
	mutateAndGetPayload: ( args ) => {
		return deleteProduct( args );
	},
});
const DeleteInventoryOrderMutation = mutationWithClientMutationId({
	name: 'DeleteInventoryOrder',
	inputFields: {
		inventory_order_id: { type: GraphQLInt },
	},
	outputFields: {
		inventory_order: {
			type: GraphQLInventoryOrder,
			resolve: ( payload, args, context ) => {
			  //   console.log( 'payload:', payload );
				return payload//getInventoryOrder({ id: payload.Cat_ID })
			}
		},
	},
	mutateAndGetPayload: ( args ) => {
		return deleteInventoryOrder( args );
	},
});
  

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		signUp: SignUpMutation,
		login: LoginMutation,
		updateRole: UpdateRoleMutation,
		addCategory: AddCategoryMutation,
		addProduct: AddProductMutation,
		deleteEmployee: DeleteEmployeeMutation,
		deleteCategory: DeleteCategoryMutation,
		deleteProduct: DeleteProductMutation,
		deleteInventoryOrder: DeleteInventoryOrderMutation,
	},
});

export default new GraphQLSchema({
	query: Query,
	mutation: Mutation,
});