
import { graphql, commitMutation } from 'react-relay';
import environment from '../../../../helpers/relay-environment';

const mutation = graphql`
    mutation ValidatePaymentMutation( $input: ValidatePaymentInput! ) {
        validatePayment ( input: $input ) {
            user {
                user_id
            }
        }
    }
`;

function commit( args ) {
    // console.log(args)
    return new Promise( ( resolve, reject ) => {
        commitMutation(
            environment,
            {
                mutation,
                variables: {
                    input: args
                },
                onCompleted: ( res, err ) => {
                    console.log( 'res:', res );
                    if ( err ) {
                        console.error( "There was an error:", err )
                        return reject( err )
                    }
                    return resolve( res );
                },
                onError: err => {
                    console.error( err.stack )
                    return reject( err )
                }
            }
        )
    });
}

export default { commit };