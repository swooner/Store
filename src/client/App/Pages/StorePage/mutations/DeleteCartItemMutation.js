
import { graphql, commitMutation } from 'react-relay';
import environment from '../../../../helpers/relay-environment';

const mutation = graphql`
    mutation DeleteCartItemMutation( $input: DeleteCartItemInput! ) {
        deleteCartItem ( input: $input ) {
            product {
                product_id
            }
        }
    }
`;

function commit( args, callback ) {
    console.log( args )
    return commitMutation(
        environment,
        {
            mutation,
            variables: {
                input: args
            },
            onCompleted: ( res, err ) => {
                const response = res.deleteCartItem;
                if ( err ) {
                    console.error( err )
                    return
                }
                if ( response.error ) {
                    console.error( response.error )
                    return
                }
            },
            onError: err => console.error( err.stack )
        }
    ),
    callback
}

export default { commit };