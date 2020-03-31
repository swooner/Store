
import { graphql, commitMutation } from 'react-relay';
import environment from '../../../../helpers/relay-environment';

const mutation = graphql`
    mutation LoginMutation( $input: LoginInput! ) {
        login ( input: $input ) {
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
                const response = res.login;
                if ( err ) {
                    console.error( err )
                    return
                }
                if ( response.error ) {
                    console.error( response.error )
                    return
                }
                if ( response.user ) {
                    localStorage.setItem( 'ACTIVE_USER', JSON.stringify( response.user ) );
                    window.location.replace( '/' );
                }
            },
            onError: err => console.error(err.stack)
        }
    ),
    callback
}

export default { commit };