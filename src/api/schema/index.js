
import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { nodeField } from './nodes';
import { ProductQuery } from './queries/ProductQuery';
import { AddProductMutation } from './mutations/AddProductMutation';

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
      product: ProductQuery,
      node: nodeField,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
      addProduct: AddProductMutation,
  },
});

export default new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});