
import { graphql, commitMutation } from 'react-relay';
import environment from '../../../../helpers/relay-environment';

const mutation = graphql`
    mutation SubmitOrderMutation( $input: SubmitOrderInput! ) {
        submitOrder ( input: $input ) {
            order {
                order_id
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
                const response = res.login;
                if ( err ) {
                    console.error( err )
                    return
                }
                if ( response.error ) {
                    console.error( response.error )
                    return
                }
                if ( response.order ) {
                    localStorage.removeItem( 'checkout-sale-method' );
                    localStorage.removeItem( 'checkout-delivery-address-option' );
                    localStorage.removeItem( 'checkout-custom-delivery-address' );
                    localStorage.removeItem( 'checkout-payment-method' );
                    window.location.replace( '/checkout/confirmation' );
                }
            },
            onError: err => console.error(err.stack)
        }
    ),
    callback
}

export default { commit };