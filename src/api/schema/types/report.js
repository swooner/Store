import {
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
  GraphQLFloat
} from "graphql";
import { connectionDefinitions } from "graphql-relay";

import {} from "../queries/queries";

export const GraphQLReport = new GraphQLObjectType({
  name: "Report",
  fields: () => ({
    total_sale: {
      type: GraphQLFloat,
      resolve: root => {
        return root.Total_Sale;
      }
    },
    total_sale_cash: {
      type: GraphQLFloat,
      resolve: root => {
        return root.Total_Sale_by_CASH;
      }
    },
    total_sale_card: {
      type: GraphQLFloat,
      resolve: root => {
        return root.Total_Sale_by_CARD;
      }
    },
    total_customer: {
      type: GraphQLInt,
      resolve: root => {
        return root.Total_Customer;
      }
    }
  })
});

export const GraphQLReportEachProduct = new GraphQLObjectType({
  name: "ReportEachProduct",
  fields: () => ({
    product_id: {
      type: GraphQLInt,
      resolve: root => {
        return root.Product_ID;
      }
    },
    product_name: {
      type: GraphQLString,
      resolve: root => {
        return root.Product_Name;
      }
    },
    total_sale: {
      type: GraphQLFloat,
      resolve: root => {
        return root.Total_Sale;
      }
    }
  })
});
