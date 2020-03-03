
import {
    mutationWithClientMutationId,
} from 'graphql-relay';
  
import {
    GraphQLID, 
    GraphQLNonNull, 
    GraphQLBoolean,
    GraphQLString 
} from 'graphql';
  
import {
    addProduct,
} from '../../database/queries/product.js';

  
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
  
export { AddProductMutation };