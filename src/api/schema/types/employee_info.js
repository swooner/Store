

import { 
    GraphQLString,
    GraphQLObjectType,
} from 'graphql';


const EmployeeInfo = new GraphQLObjectType({
	name: 'EmployeeInfo',
	fields: {
		role: {
			type: GraphQLString,
			resolve: ( root ) => {
				return root.E_role
			}
		},
	}
});

export default EmployeeInfo;