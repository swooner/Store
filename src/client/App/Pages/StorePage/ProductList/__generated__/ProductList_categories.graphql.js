/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductList_categories$ref: FragmentReference;
declare export opaque type ProductList_categories$fragmentType: ProductList_categories$ref;
export type ProductList_categories = {|
  +categories: ?$ReadOnlyArray<?{|
    +name: ?string,
    +description: ?string,
    +products: ?{|
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
  |}>,
  +$refType: ProductList_categories$ref,
|};
export type ProductList_categories$data = ProductList_categories;
export type ProductList_categories$key = {
  +$data?: ProductList_categories$data,
  +$fragmentRefs: ProductList_categories$ref,
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
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ProductList_categories",
  "type": "Query",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": null
      }
    ]
  },
  "argumentDefinitions": [],
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
        (v0/*: any*/),
        (v1/*: any*/),
        {
          "kind": "LinkedField",
          "alias": "products",
          "name": "__ProductList_products_connection",
          "storageKey": null,
          "args": null,
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
                    (v1/*: any*/),
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '5c3306fa65e99c7993fdaaeb4f14de70';

module.exports = node;
