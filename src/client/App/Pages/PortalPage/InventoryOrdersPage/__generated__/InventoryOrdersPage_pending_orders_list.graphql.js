/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type InventoryOrdersPage_pending_orders_list$ref: FragmentReference;
declare export opaque type InventoryOrdersPage_pending_orders_list$fragmentType: InventoryOrdersPage_pending_orders_list$ref;
export type InventoryOrdersPage_pending_orders_list = {|
  +pending_orders_list: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +inventory_order_id: ?string,
        +product: ?{|
          +product_id: ?number,
          +name: ?string,
          +threshold: ?number,
          +quantity: ?number,
        |},
        +created_at: ?any,
      |}
    |}>
  |},
  +$refType: InventoryOrdersPage_pending_orders_list$ref,
|};
export type InventoryOrdersPage_pending_orders_list$data = InventoryOrdersPage_pending_orders_list;
export type InventoryOrdersPage_pending_orders_list$key = {
  +$data?: InventoryOrdersPage_pending_orders_list$data,
  +$fragmentRefs: InventoryOrdersPage_pending_orders_list$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "InventoryOrdersPage_pending_orders_list",
  "type": "Query",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "pending_orders_list"
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
      "alias": "pending_orders_list",
      "name": "__InventoryOrdersPage_pending_orders_list_connection",
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
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "inventory_order_id",
                  "args": null,
                  "storageKey": null
                },
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
                      "name": "product_id",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "name",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "threshold",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "quantity",
                      "args": null,
                      "storageKey": null
                    }
                  ]
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
(node/*: any*/).hash = '373c88f43982f3358e5b26ec9c8840bb';

module.exports = node;
