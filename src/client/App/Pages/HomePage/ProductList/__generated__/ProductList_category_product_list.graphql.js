/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductList_category_product_list$ref: FragmentReference;
declare export opaque type ProductList_category_product_list$fragmentType: ProductList_category_product_list$ref;
export type ProductList_category_product_list = {|
  +category_product_list: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +category: ?{|
          +name: ?string
        |},
        +name: ?string,
        +description: ?string,
        +price: ?number,
      |}
    |}>
  |},
  +$refType: ProductList_category_product_list$ref,
|};
export type ProductList_category_product_list$data = ProductList_category_product_list;
export type ProductList_category_product_list$key = {
  +$data?: ProductList_category_product_list$data,
  +$fragmentRefs: ProductList_category_product_list$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ProductList_category_product_list",
  "type": "Query",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "category_product_list"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "first",
      "type": "Int",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "category_name",
      "type": "String",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "category_product_list",
      "name": "__ProductList_category_product_list_connection",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "category_name",
          "variableName": "category_name"
        }
      ],
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
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "category",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Category",
                  "plural": false,
                  "selections": [
                    (v0/*: any*/)
                  ]
                },
                (v0/*: any*/),
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "description",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "price",
                  "args": null,
                  "storageKey": null
                },
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '9bf69b6a4e2fd1d1bc29fd42cab9768e';

module.exports = node;
