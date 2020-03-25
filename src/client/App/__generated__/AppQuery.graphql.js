/**
 * @flow
 * @relayHash 0bc98f524e13a87e71302e7cad7104b5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProductListPage_productList$ref = any;
type ProductPage_product$ref = any;
export type AppQueryVariables = {|
  product_id?: ?number,
  isProductPage?: ?boolean,
  isProductListPage?: ?boolean,
|};
export type AppQueryResponse = {|
  +$fragmentRefs: ProductPage_product$ref & ProductListPage_productList$ref
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery(
  $product_id: Int
  $isProductPage: Boolean
  $isProductListPage: Boolean
) {
  ...ProductPage_product_1oYwkK @include(if: $isProductPage)
  ...ProductListPage_productList @include(if: $isProductListPage)
}

fragment ProductListPage_productList on Query {
  productList(first: 10) {
    edges {
      node {
        product_id
        brand
        name
        price
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

fragment ProductPage_product_1oYwkK on Query {
  product(product_id: $product_id) {
    brand
    name
    description
    price
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "product_id",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "isProductPage",
    "type": "Boolean",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "isProductListPage",
    "type": "Boolean",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "product_id",
    "variableName": "product_id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "brand",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "price",
  "args": null,
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
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
        "kind": "Condition",
        "passingValue": true,
        "condition": "isProductPage",
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ProductPage_product",
            "args": (v1/*: any*/)
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isProductListPage",
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ProductListPage_productList",
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
        "kind": "Condition",
        "passingValue": true,
        "condition": "isProductPage",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "product",
            "storageKey": null,
            "args": (v1/*: any*/),
            "concreteType": "Product",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "description",
                "args": null,
                "storageKey": null
              },
              (v4/*: any*/)
            ]
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isProductListPage",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "productList",
            "storageKey": "productList(first:10)",
            "args": (v5/*: any*/),
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
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "product_id",
                        "args": null,
                        "storageKey": null
                      },
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
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
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "productList",
            "args": (v5/*: any*/),
            "handle": "connection",
            "key": "ProductListPage_productList",
            "filters": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery(\n  $product_id: Int\n  $isProductPage: Boolean\n  $isProductListPage: Boolean\n) {\n  ...ProductPage_product_1oYwkK @include(if: $isProductPage)\n  ...ProductListPage_productList @include(if: $isProductListPage)\n}\n\nfragment ProductListPage_productList on Query {\n  productList(first: 10) {\n    edges {\n      node {\n        product_id\n        brand\n        name\n        price\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ProductPage_product_1oYwkK on Query {\n  product(product_id: $product_id) {\n    brand\n    name\n    description\n    price\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1d222be2ed273488fe32706bb72793ce';

module.exports = node;
