
import { graphql, commitMutation } from 'react-relay';
import environment from '../../../../helpers/relay-environment';

const mutation = graphql`
    mutation SavePaymentMutation( $input: SavePaymentInput! ) {
        savePayment ( input: $input ) {
            user {
                user_id
            }
        }
    }
`;

function commit( args, callback ) {
    // console.log(args)
    return commitMutation(
        environment,
        {
            mutation,
            variables: {
                input: args
            },
            onCompleted: ( res, err ) => {
                console.log( 'res:', res );
                const response = res.user;
                if ( err ) {
                    console.error( err )
                    return
                }
                if ( response.error ) {
                    console.error( response.error )
                    return
                }
                if ( response.order ) {
                }
            },
            onError: err => console.error(err.stack)
        }
    ),
    callback
}

export default { commit };