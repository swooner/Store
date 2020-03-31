/**
 * @flow
 * @relayHash fad349d4920cf1e72b27483f3095f415
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteInventoryOrderInput = {|
  inventory_order_id: number,
  clientMutationId?: ?string,
|};
export type DeleteInventoryOrderMutationVariables = {|
  input: DeleteInventoryOrderInput
|};
export type DeleteInventoryOrderMutationResponse = {|
  +deleteInventoryOrder: {|
    +inventory_order: {|
      +inventory_order_id: ?string
    |}
  |}
|};
export type DeleteInventoryOrderMutation = {|
  variables: DeleteInventoryOrderMutationVariables,
  response: DeleteInventoryOrderMutationResponse,
|};
*/


/*
mutation DeleteInventoryOrderMutation(
  $input: DeleteInventoryOrderInput!
) {
  deleteInventoryOrder(input: $input) {
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
    "type": "DeleteInventoryOrderInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteInventoryOrder",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteInventoryOrderPayload",
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
    "name": "DeleteInventoryOrderMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteInventoryOrderMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteInventoryOrderMutation",
    "id": null,
    "text": "mutation DeleteInventoryOrderMutation(\n  $input: DeleteInventoryOrderInput!\n) {\n  deleteInventoryOrder(input: $input) {\n    inventory_order {\n      inventory_order_id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8097bd0951f6dae37dad711766d3d6a6';

module.exports = node;
