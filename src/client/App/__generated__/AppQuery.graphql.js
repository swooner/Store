/**
 * @flow
 * @relayHash 5a2783234e978044c189b0d2a378e196
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AddEmployee_user_search$ref = any;
type AddProduct_category_list$ref = any;
type CategoriesPage_category_list$ref = any;
type CheckoutPage_viewer$ref = any;
type EmployeesPage_employee_list$ref = any;
type InventoryOrdersPage_inventory_order_list$ref = any;
type ProductList_categories$ref = any;
type ProductsPage_product_list$ref = any;
type ReportPage_report_data_by_month$ref = any;
type StorePage_viewer$ref = any;
export type AppQueryVariables = {|
  user_id?: ?number,
  isStorePage: boolean,
  isCheckoutPage: boolean,
  isEmployeesPage: boolean,
  isAddProductPage: boolean,
  isAddEmployeePage: boolean,
  isCategoriesPage: boolean,
  isProductsPage: boolean,
  isInventoryOrdersPage: boolean,
  isReportPage: boolean,
|};
export type AppQueryResponse = {|
  +viewer: ?{|
    +user_id: ?number,
    +employee_info: ?{|
      +role: ?string
    |},
    +$fragmentRefs: StorePage_viewer$ref & CheckoutPage_viewer$ref,
  |},
  +$fragmentRefs: ProductList_categories$ref & AddEmployee_user_search$ref & EmployeesPage_employee_list$ref & CategoriesPage_category_list$ref & ProductsPage_product_list$ref & AddProduct_category_list$ref & InventoryOrdersPage_inventory_order_list$ref & ReportPage_report_data_by_month$ref,
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery(
  $user_id: Int
  $isStorePage: Boolean!
  $isCheckoutPage: Boolean!
  $isEmployeesPage: Boolean!
  $isAddProductPage: Boolean!
  $isAddEmployeePage: Boolean!
  $isCategoriesPage: Boolean!
  $isProductsPage: Boolean!
  $isInventoryOrdersPage: Boolean!
  $isReportPage: Boolean!
) {
  viewer(id: $user_id) {
    user_id
    employee_info {
      role
    }
    ...StorePage_viewer @include(if: $isStorePage)
    ...CheckoutPage_viewer @include(if: $isCheckoutPage)
  }
  ...ProductList_categories @include(if: $isStorePage)
  ...AddEmployee_user_search @include(if: $isAddEmployeePage)
  ...EmployeesPage_employee_list @include(if: $isEmployeesPage)
  ...CategoriesPage_category_list @include(if: $isCategoriesPage)
  ...ProductsPage_product_list @include(if: $isProductsPage)
  ...AddProduct_category_list @include(if: $isAddProductPage)
  ...InventoryOrdersPage_inventory_order_list @include(if: $isInventoryOrdersPage)
  ...ReportPage_report_data_by_month @include(if: $isReportPage)
}

fragment AddEmployee_user_search on Query {
  user_search {
    edges {
      node {
        user_id
        first_name
        last_name
        account_name
        employee_info {
          role
        }
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment AddProduct_category_list on Query {
  category_list(first: 10) {
    category_id
    name
  }
}

fragment Cart_cart on User {
  cart {
    order_id
    items {
      product {
        product_id
        name
        price
        sizes {
          product_size_id
          name
        }
      }
      size {
        product_size_id
        name
      }
      quantity
      cost
    }
    total
  }
}

fragment CategoriesPage_category_list on Query {
  category_list(first: 10) {
    category_id
    name
    description
  }
}

fragment CheckoutPage_viewer on User {
  user_id
  first_name
  last_name
  street
  email_address
  city
  state
  zip_code
  phone_number
  ...Cart_cart
}

fragment EmployeesPage_employee_list on Query {
  employee_list(first: 10) {
    edges {
      node {
        user_id
        first_name
        last_name
        employee_info {
          role
        }
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment InventoryOrdersPage_inventory_order_list on Query {
  inventory_order_list(first: 10) {
    edges {
      node {
        product {
          name
        }
        quantity
        status
        created_at
        received_at
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment ProductList_categories on Query {
  categories {
    name
    description
    products(first: 10) {
      edges {
        node {
          product_id
          category {
            name
          }
          name
          description
          picture_url
          price
          sizes {
            product_size_id
            name
            surcharge
          }
          __typename
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}

fragment ProductsPage_product_list on Query {
  product_list(first: 10) {
    edges {
      node {
        product_id
        name
        price
        quantity
        threshold
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment ReportPage_report_data_by_month on Query {
  get_report_by_month {
    total_sale
    total_sale_cash
    total_sale_card
    total_customer
  }
}

fragment StorePage_viewer on User {
  user_id
  ...Cart_cart
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "user_id",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "isStorePage",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "isCheckoutPage",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "isEmployeesPage",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "isAddProductPage",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "isAddEmployeePage",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "isCategoriesPage",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "isProductsPage",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "isInventoryOrdersPage",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "isReportPage",
    "type": "Boolean!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "user_id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "user_id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "employee_info",
  "storageKey": null,
  "args": null,
  "concreteType": "EmployeeInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "role",
      "args": null,
      "storageKey": null
    }
  ]
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "product_id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "price",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "product_size_id",
  "args": null,
  "storageKey": null
},
v8 = [
  (v7/*: any*/),
  (v5/*: any*/)
],
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "quantity",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "cart",
  "storageKey": null,
  "args": null,
  "concreteType": "Cart",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "order_id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "items",
      "storageKey": null,
      "args": null,
      "concreteType": "CartItem",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "product",
          "storageKey": null,
          "args": null,
          "concreteType": "Product",
          "plural": false,
          "selections": [
            (v4/*: any*/),
            (v5/*: any*/),
            (v6/*: any*/),
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "sizes",
              "storageKey": null,
              "args": null,
              "concreteType": "ProductSize",
              "plural": true,
              "selections": (v8/*: any*/)
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "size",
          "storageKey": null,
          "args": null,
          "concreteType": "ProductSize",
          "plural": false,
          "selections": (v8/*: any*/)
        },
        (v9/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "cost",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "total",
      "args": null,
      "storageKey": null
    }
  ]
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v14 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v15 = [
  (v5/*: any*/)
],
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "endCursor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasNextPage",
      "args": null,
      "storageKey": null
    }
  ]
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "category_id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "isStorePage",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "StorePage_viewer",
                "args": null
              }
            ]
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "isCheckoutPage",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "CheckoutPage_viewer",
                "args": null
              }
            ]
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isStorePage",
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ProductList_categories",
            "args": null
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isAddEmployeePage",
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "AddEmployee_user_search",
            "args": null
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isEmployeesPage",
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "EmployeesPage_employee_list",
            "args": null
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isCategoriesPage",
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CategoriesPage_category_list",
            "args": null
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isProductsPage",
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ProductsPage_product_list",
            "args": null
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isAddProductPage",
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "AddProduct_category_list",
            "args": null
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isInventoryOrdersPage",
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "InventoryOrdersPage_inventory_order_list",
            "args": null
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isReportPage",
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ReportPage_report_data_by_month",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "isStorePage",
            "selections": [
              (v10/*: any*/)
            ]
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "isCheckoutPage",
            "selections": [
              (v11/*: any*/),
              (v12/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "street",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "email_address",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "city",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "state",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "zip_code",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "phone_number",
                "args": null,
                "storageKey": null
              },
              (v10/*: any*/)
            ]
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isStorePage",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "categories",
            "storageKey": null,
            "args": null,
            "concreteType": "Category",
            "plural": true,
            "selections": [
              (v5/*: any*/),
              (v13/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "products",
                "storageKey": "products(first:10)",
                "args": (v14/*: any*/),
                "concreteType": "ProductConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ProductEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Product",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "category",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Category",
                            "plural": false,
                            "selections": (v15/*: any*/)
                          },
                          (v5/*: any*/),
                          (v13/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "picture_url",
                            "args": null,
                            "storageKey": null
                          },
                          (v6/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "sizes",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "ProductSize",
                            "plural": true,
                            "selections": [
                              (v7/*: any*/),
                              (v5/*: any*/),
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "surcharge",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          },
                          (v16/*: any*/)
                        ]
                      },
                      (v17/*: any*/)
                    ]
                  },
                  (v18/*: any*/)
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "products",
                "args": (v14/*: any*/),
                "handle": "connection",
                "key": "ProductList_products",
                "filters": null
              }
            ]
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isAddEmployeePage",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user_search",
            "storageKey": null,
            "args": null,
            "concreteType": "UserConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "UserEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "account_name",
                        "args": null,
                        "storageKey": null
                      },
                      (v3/*: any*/),
                      (v16/*: any*/)
                    ]
                  },
                  (v17/*: any*/)
                ]
              },
              (v18/*: any*/)
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "user_search",
            "args": null,
            "handle": "connection",
            "key": "AddEmployee_user_search",
            "filters": [
              "query"
            ]
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isEmployeesPage",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "employee_list",
            "storageKey": "employee_list(first:10)",
            "args": (v14/*: any*/),
            "concreteType": "UserConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "UserEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v3/*: any*/),
                      (v16/*: any*/)
                    ]
                  },
                  (v17/*: any*/)
                ]
              },
              (v18/*: any*/)
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "employee_list",
            "args": (v14/*: any*/),
            "handle": "connection",
            "key": "EmployeesPage_employee_list",
            "filters": null
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isCategoriesPage",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "category_list",
            "storageKey": "category_list(first:10)",
            "args": (v14/*: any*/),
            "concreteType": "Category",
            "plural": true,
            "selections": [
              (v19/*: any*/),
              (v5/*: any*/),
              (v13/*: any*/)
            ]
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isProductsPage",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "product_list",
            "storageKey": "product_list(first:10)",
            "args": (v14/*: any*/),
            "concreteType": "ProductConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "ProductEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Product",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v9/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "threshold",
                        "args": null,
                        "storageKey": null
                      },
                      (v16/*: any*/)
                    ]
                  },
                  (v17/*: any*/)
                ]
              },
              (v18/*: any*/)
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "product_list",
            "args": (v14/*: any*/),
            "handle": "connection",
            "key": "ProductsPage_product_list",
            "filters": null
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isAddProductPage",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "category_list",
            "storageKey": "category_list(first:10)",
            "args": (v14/*: any*/),
            "concreteType": "Category",
            "plural": true,
            "selections": [
              (v19/*: any*/),
              (v5/*: any*/)
            ]
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isInventoryOrdersPage",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "inventory_order_list",
            "storageKey": "inventory_order_list(first:10)",
            "args": (v14/*: any*/),
            "concreteType": "InventoryOrderConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "InventoryOrderEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "InventoryOrder",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "product",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Product",
                        "plural": false,
                        "selections": (v15/*: any*/)
                      },
                      (v9/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "status",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "created_at",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "received_at",
                        "args": null,
                        "storageKey": null
                      },
                      (v16/*: any*/)
                    ]
                  },
                  (v17/*: any*/)
                ]
              },
              (v18/*: any*/)
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "inventory_order_list",
            "args": (v14/*: any*/),
            "handle": "connection",
            "key": "InventoryOrdersPage_inventory_order_list",
            "filters": null
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isReportPage",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "get_report_by_month",
            "storageKey": null,
            "args": null,
            "concreteType": "Report",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "total_sale",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "total_sale_cash",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "total_sale_card",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "total_customer",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery(\n  $user_id: Int\n  $isStorePage: Boolean!\n  $isCheckoutPage: Boolean!\n  $isEmployeesPage: Boolean!\n  $isAddProductPage: Boolean!\n  $isAddEmployeePage: Boolean!\n  $isCategoriesPage: Boolean!\n  $isProductsPage: Boolean!\n  $isInventoryOrdersPage: Boolean!\n  $isReportPage: Boolean!\n) {\n  viewer(id: $user_id) {\n    user_id\n    employee_info {\n      role\n    }\n    ...StorePage_viewer @include(if: $isStorePage)\n    ...CheckoutPage_viewer @include(if: $isCheckoutPage)\n  }\n  ...ProductList_categories @include(if: $isStorePage)\n  ...AddEmployee_user_search @include(if: $isAddEmployeePage)\n  ...EmployeesPage_employee_list @include(if: $isEmployeesPage)\n  ...CategoriesPage_category_list @include(if: $isCategoriesPage)\n  ...ProductsPage_product_list @include(if: $isProductsPage)\n  ...AddProduct_category_list @include(if: $isAddProductPage)\n  ...InventoryOrdersPage_inventory_order_list @include(if: $isInventoryOrdersPage)\n  ...ReportPage_report_data_by_month @include(if: $isReportPage)\n}\n\nfragment AddEmployee_user_search on Query {\n  user_search {\n    edges {\n      node {\n        user_id\n        first_name\n        last_name\n        account_name\n        employee_info {\n          role\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment AddProduct_category_list on Query {\n  category_list(first: 10) {\n    category_id\n    name\n  }\n}\n\nfragment Cart_cart on User {\n  cart {\n    order_id\n    items {\n      product {\n        product_id\n        name\n        price\n        sizes {\n          product_size_id\n          name\n        }\n      }\n      size {\n        product_size_id\n        name\n      }\n      quantity\n      cost\n    }\n    total\n  }\n}\n\nfragment CategoriesPage_category_list on Query {\n  category_list(first: 10) {\n    category_id\n    name\n    description\n  }\n}\n\nfragment CheckoutPage_viewer on User {\n  user_id\n  first_name\n  last_name\n  street\n  email_address\n  city\n  state\n  zip_code\n  phone_number\n  ...Cart_cart\n}\n\nfragment EmployeesPage_employee_list on Query {\n  employee_list(first: 10) {\n    edges {\n      node {\n        user_id\n        first_name\n        last_name\n        employee_info {\n          role\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment InventoryOrdersPage_inventory_order_list on Query {\n  inventory_order_list(first: 10) {\n    edges {\n      node {\n        product {\n          name\n        }\n        quantity\n        status\n        created_at\n        received_at\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ProductList_categories on Query {\n  categories {\n    name\n    description\n    products(first: 10) {\n      edges {\n        node {\n          product_id\n          category {\n            name\n          }\n          name\n          description\n          picture_url\n          price\n          sizes {\n            product_size_id\n            name\n            surcharge\n          }\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment ProductsPage_product_list on Query {\n  product_list(first: 10) {\n    edges {\n      node {\n        product_id\n        name\n        price\n        quantity\n        threshold\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ReportPage_report_data_by_month on Query {\n  get_report_by_month {\n    total_sale\n    total_sale_cash\n    total_sale_card\n    total_customer\n  }\n}\n\nfragment StorePage_viewer on User {\n  user_id\n  ...Cart_cart\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c7d6f9065be77b02a7a7fabd78830c16';

module.exports = node;
