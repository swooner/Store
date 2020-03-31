/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type InventoryOrdersPage_inventory_order_list$ref: FragmentReference;
declare export opaque type InventoryOrdersPage_inventory_order_list$fragmentType: InventoryOrdersPage_inventory_order_list$ref;
export type InventoryOrdersPage_inventory_order_list = {|
  +inventory_order_list: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +product: ?{|
          +name: ?string
        |},
        +quantity: ?number,
        +status: ?string,
        +created_at: ?any,
        +received_at: ?any,
      |}
    |}>
  |},
  +$refType: InventoryOrdersPage_inventory_order_list$ref,
|};
export type InventoryOrdersPage_inventory_order_list$data = InventoryOrdersPage_inventory_order_list;
export type InventoryOrdersPage_inventory_order_list$key = {
  +$data?: InventoryOrdersPage_inventory_order_list$data,
  +$fragmentRefs: InventoryOrdersPage_inventory_order_list$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "InventoryOrdersPage_inventory_order_list",
  "type": "Query",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "inventory_order_list"
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
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "inventory_order_list",
      "name": "__InventoryOrdersPage_inventory_order_list_connection",
      "storageKey": null,
      "args": null,
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
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "name",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "quantity",
                  "args": null,
                  "storageKey": null
                },
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
// prettier-ignore
(node/*: any*/).hash = 'b6ed6e3e5b859f214814607f5df9ca31';

module.exports = node;
