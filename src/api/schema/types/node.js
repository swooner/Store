
import {
    fromGlobalId,
    nodeDefinitions,
} from 'graphql-relay';

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

export { nodeInterface, nodeField }