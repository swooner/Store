/**
 * @flow
 * @relayHash ae2b832bd6828d03c7533d092343d63a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FillInventoryOrderInput = {|
  inventory_order_id: number,
  product_id: number,
  user_id?: ?number,
  quantity: number,
  clientMutationId?: ?string,
|};
export type FillInventoryOrderMutationVariables = {|
  input: FillInventoryOrderInput
|};
export type FillInventoryOrderMutationResponse = {|
  +fillInventoryOrder: {|
    +inventory_order: {|
      +inventory_order_id: ?string
    |}
  |}
|};
export type FillInventoryOrderMutation = {|
  variables: FillInventoryOrderMutationVariables,
  response: FillInventoryOrderMutationResponse,
|};
*/


/*
mutation FillInventoryOrderMutation(
  $input: FillInventoryOrderInput!
) {
  fillInventoryOrder(input: $input) {
    inventory_order {
      inventory_order_id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "FillInventoryOrderInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "fillInventoryOrder",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "FillInventoryOrderPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "inventory_order",
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
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FillInventoryOrderMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "FillInventoryOrderMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "FillInventoryOrderMutation",
    "id": null,
    "text": "mutation FillInventoryOrderMutation(\n  $input: FillInventoryOrderInput!\n) {\n  fillInventoryOrder(input: $input) {\n    inventory_order {\n      inventory_order_id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ca4d28b73e15e82279007f7b6837108a';

module.exports = node;
