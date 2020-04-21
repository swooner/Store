import {
  GraphQLObjectType,
  GraphQLSchema,
} from "graphql";

import {
  ViewerQuery,
  CategoriesQuery,
  CartQuery,
  UserSearchQuery,
  EmployeeQuery,
  CategoryQuery,
  CategoryListQuery,
  ProductQuery,
  ProductListQuery,
  // InventoryOrderQuery,
  PendingInventoryOrderQuery,
  FilledInventoryOrderQuery,
  ProductReportOverall,
  ProductReportOverallByMonth,
  EachProductReportByMonth
} from "./queries/queries";

import {
  SignUpMutation,
  LoginMutation,
  UpdateRoleMutation,
  AddCategoryMutation,
  AddProductMutation,
  DeleteEmployeeMutation,
  DeleteCategoryMutation,
  DeleteProductMutation,
  FillInventoryOrderMutation,
  DeleteInventoryOrderMutation,
  AddCartItemMutation,
  DeleteCartItemMutation,
  UpdateCartItemMutation,
  SubmitOrderMutation,
  SavePaymentMutation,
  ValidatePaymentMutation
} from "./mutations/mutations";

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    // node: nodeField,
    viewer: ViewerQuery,
    categories: CategoriesQuery,
    cart: CartQuery,
    user_search: UserSearchQuery,
    employee_list: EmployeeQuery,
    category_list: CategoryListQuery,
    product: ProductQuery,
    product_list: ProductListQuery,
    pending_orders_list: PendingInventoryOrderQuery,
    filled_orders_list: FilledInventoryOrderQuery,
    get_report: ProductReportOverall,
    get_report_by_month: ProductReportOverallByMonth,
    get_each_product_report_by_month: EachProductReportByMonth
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signUp: SignUpMutation,
    login: LoginMutation,
    updateRole: UpdateRoleMutation,
    addCategory: AddCategoryMutation,
    addProduct: AddProductMutation,
    deleteEmployee: DeleteEmployeeMutation,
    deleteCategory: DeleteCategoryMutation,
    deleteProduct: DeleteProductMutation,
    fillInventoryOrder: FillInventoryOrderMutation,
    deleteInventoryOrder: DeleteInventoryOrderMutation,
    addCartItem: AddCartItemMutation,
    deleteCartItem: DeleteCartItemMutation,
    updateCartItem: UpdateCartItemMutation,
    submitOrder: SubmitOrderMutation,
    savePayment: SavePaymentMutation,
    validatePayment: ValidatePaymentMutation
  }
});

export default new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
