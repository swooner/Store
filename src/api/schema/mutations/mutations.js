
import { 
	GraphQLID,
	GraphQLInt,
	GraphQLBoolean,
	GraphQLFloat,
	GraphQLString,
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLList,
	GraphQLInputObjectType,
} from 'graphql';

import {
	mutationWithClientMutationId,
} from 'graphql-relay';

import { getCategory } from '../../database/queries/category';
import { getProduct, getProductsByCategoryId, getProductsByCategoryName } from '../../database/queries/product';
import { getUser } from '../../database/queries/user';
import { getInventoryOrder } from '../../database/queries/inventory';

import { updateRole } from '../../database/mutations/user';
import { signUp, login } from '../../database/mutations/auth';
import { deleteEmployee } from '../../database/mutations/employee';
import { addCategory, deleteCategory } from '../../database/mutations/category';
import { addProduct, deleteProduct } from '../../database/mutations/product';
import { deleteInventoryOrder } from '../../database/mutations/inventory';
import { addCartItem, deleteCartItem, updateCartItem, submitOrder, savePayment, validatePayment } from '../../database/mutations/cart';

import GraphQLCategory from '../types/category';
import GraphQLUser from '../types/user';
import GraphQLProduct from '../types/product';
import GraphQLInventoryOrder from '../types/inventory_order';
import Cart from '../types/cart';



export const SignUpMutation = mutationWithClientMutationId({
	name: 'SignUp',
	inputFields: {
		first_name: { type: GraphQLString },
		last_name: { type: GraphQLString },
		account_name: { type: GraphQLString },
		address: {type: GraphQLString},
		password: { type: GraphQLString },
		street: { type: GraphQLString },
		city: { type: GraphQLString },
		state: { type: GraphQLString },
		zip_code: { type: GraphQLString },
		phone_number: { type: GraphQLString },
		email_address: { type: GraphQLString },
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

export const LoginMutation = mutationWithClientMutationId({
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

export const DeleteEmployeeMutation = mutationWithClientMutationId({
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

export const UpdateRoleMutation = mutationWithClientMutationId({
    name: 'UpdateRole',
    inputFields: {
        user_id: { type: GraphQLInt },
        role: { type: GraphQLString },
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

export const AddCategoryMutation = mutationWithClientMutationId({
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

export const DeleteCategoryMutation = mutationWithClientMutationId({
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

// bubble panel input
const ProductSizeInput = new GraphQLInputObjectType({
    name: 'ProductSizeInput',
    fields: {
        name: { type: GraphQLString },
        surcharge: { type: GraphQLFloat }
    }
});

export const AddProductMutation = mutationWithClientMutationId({
	name: 'AddProduct',
	inputFields: {
		category_id: { type: GraphQLInt },
		name: { type: new GraphQLNonNull( GraphQLString ) },
		description: { type: GraphQLString },
		price: { type: new GraphQLNonNull( GraphQLFloat ) },
		sizes: { type: new GraphQLList( ProductSizeInput ) },
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
export const DeleteProductMutation = mutationWithClientMutationId({
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
export const DeleteInventoryOrderMutation = mutationWithClientMutationId({
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

export const AddCartItemMutation = mutationWithClientMutationId({
	name: 'AddCartItem',
	inputFields: {
		product_id: { type: GraphQLInt },
		quantity: { type: GraphQLInt },
		size_id: { type: GraphQLInt },
		user_id: { type: GraphQLInt },
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
		return addCartItem( args );
	},
});

export const DeleteCartItemMutation = mutationWithClientMutationId({
	name: 'DeleteCartItem',
	inputFields: {
		order_id: { type: GraphQLInt },
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
		return deleteCartItem( args );
	},
});
  

export const UpdateCartItemMutation = mutationWithClientMutationId({
	name: 'UpdateCartItem',
	inputFields: {
		order_id: { type: GraphQLInt },
		product_id: { type: GraphQLInt },
		quantity: { type: GraphQLInt },
		size_id: { type: GraphQLInt },
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
		return updateCartItem( args );
	},
});
  
  

export const SubmitOrderMutation = mutationWithClientMutationId({
	name: 'SubmitOrder',
	inputFields: {
		order_id: { type: GraphQLInt },
		saleMethod: { type: GraphQLString },
		paymentMethod: { type: GraphQLString },
		addressType: { type: GraphQLString },
		street: { type: GraphQLString },
		city: { type: GraphQLString },
		state: { type: GraphQLString },
		zipCode: { type: GraphQLString },
	},
	outputFields: {
		order: {
			type: Cart,
			resolve: ( payload, args, context ) => {
			  //   console.log( 'payload:', payload );
				return payload//getProduct({ id: payload.Cat_ID })
			}
		},
	},
	mutateAndGetPayload: ( args ) => {
		return submitOrder( args );
	},
});
  
export const SavePaymentMutation = mutationWithClientMutationId({
	name: 'SavePayment',
	inputFields: {
		user_id: { type: GraphQLInt },
		card_name: { type: GraphQLString },
		card_number: { type: GraphQLString },
		expiration_month: { type: GraphQLInt },
		expiration_year: { type: GraphQLInt },
	},
	outputFields: {
		order: {
			type: GraphQLUser,
			resolve: ( payload, args, context ) => {
			  //   console.log( 'payload:', payload );
				return payload//getProduct({ id: payload.Cat_ID })
			}
		},
	},
	mutateAndGetPayload: ( args ) => {
		return savePayment( args );
	},
});
  
  
export const ValidatePaymentMutation = mutationWithClientMutationId({
	name: 'ValidatePayment',
	inputFields: {
		card_name: { type: GraphQLString },
		card_number: { type: GraphQLString },
		expiration_month: { type: GraphQLInt },
		expiration_year: { type: GraphQLInt },
		security_code: { type: GraphQLInt },
	},
	outputFields: {
		user: {
			type: GraphQLUser,
			resolve: ( payload, args, context ) => {
			  //   console.log( 'payload:', payload );
				return payload//getProduct({ id: payload.Cat_ID })
			}
		},
	},
	mutateAndGetPayload: ( args ) => {
		return validatePayment( args );
	},
});
  