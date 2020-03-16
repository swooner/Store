

const CateogryQuery = {
    type: GraphQLCategory,
    args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
    },
    resolve: ( root, args ) => {
        // console.log( 'args:', args );
        return getProductOrThrow( args )
    }
};