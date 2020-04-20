import { GraphQLInt, GraphQLString, GraphQLObjectType } from "graphql";
import { GraphQLDateTime } from "graphql-iso-date";

import { connectionDefinitions } from "graphql-relay";

import { getEmployee } from "../../database/queries/employee";
import { getCart } from "../../database/queries/cart";

import EmployeeInfo from "./employee_info";
import Cart from "./cart";

const GraphQLUser = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    user_id: {
      type: GraphQLInt,
      resolve: root => {
        return root.Cus_ID;
      }
    },
    first_name: {
      type: GraphQLString,
      resolve: root => {
        return root.Cus_FName;
      }
    },
    last_name: {
      type: GraphQLString,
      resolve: root => {
        return root.Cus_LName;
      }
    },
    role: {
      type: GraphQLString,
      resolve: root => {
        return root.E_role;
      }
    },
    account_name: {
      type: GraphQLString,
      resolve: root => {
        return root.Cus_accName;
      }
    },
    street: {
      type: GraphQLString,
      resolve: root => {
        return root.Cus_street;
      }
    },
    city: {
      type: GraphQLString,
      resolve: root => {
        return root.Cus_city;
      }
    },
    state: {
      type: GraphQLString,
      resolve: root => {
        return root.Cus_state;
      }
    },
    zip_code: {
      type: GraphQLString,
      resolve: root => {
        return root.Cus_zipCode;
      }
    },
    phone_number: {
      type: GraphQLString,
      resolve: root => {
        return root.Cus_phone;
      }
    },
    created_at: {
      type: GraphQLDateTime,
      resolve: root => root.Cus_createdAt
    },
    email_address: {
      type: GraphQLString,
      resolve: root => {
        return root.Cus_email;
      }
    },
    employee_info: {
      type: EmployeeInfo,
      resolve: root => {
        return getEmployee({ id: root.Cus_ID });
      }
    },
    cart: {
      type: Cart,
      resolve: root => {
        return getCart({ user_id: root.Cus_ID });
      }
    }
  })
});

export const {
  connectionType: UserConnection,
  edgeType: GraphQLUserEdge
} = connectionDefinitions({
  name: "User",
  nodeType: GraphQLUser
});

export default GraphQLUser;
