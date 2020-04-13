
import { graphql, commitMutation } from 'react-relay';
import { useHistory } from 'react-router-dom';
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
                // const response = res.submitOrder;
                if ( err ) {
                    console.error( err )
                    // return
                }
                if ( res.error ) {
                    console.error( response.error )
                    // return
                }
                if ( res ) {
                    console.log( 'res:', res );
                    localStorage.removeItem( 'checkout-sale-method' );
                    localStorage.removeItem( 'checkout-delivery-address-option' );
                    localStorage.removeItem( 'checkout-custom-delivery-address' );
                    localStorage.removeItem( 'checkout-payment-method' );
                    localStorage.removeItem( 'checkout-order-id' );
                    localStorage.removeItem( 'checkout-products' );
                    window.location.replace( '/checkout/confirmation' );
                }
            },
            onError: err => console.error(err.stack)
        }
    ),
    callback
}

export default { commit };