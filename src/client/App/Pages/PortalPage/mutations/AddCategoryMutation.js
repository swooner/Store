
import { graphql, commitMutation } from 'react-relay';
import environment from '../../../../helpers/relay-environment';

const mutation = graphql`
    mutation AddCategoryMutation( $input: AddCategoryInput! ) {
        addCategory ( input: $input ) {
            category {
                category_id
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
                const response = res.addCategory;
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