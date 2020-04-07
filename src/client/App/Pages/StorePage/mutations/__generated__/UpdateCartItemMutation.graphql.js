/**
 * @flow
 * @relayHash e25723fdb731eb57325f0625f0e5530b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateCartItemInput = {|
  order_id?: ?number,
  product_id?: ?number,
  size_id?: ?number,
  quantity?: ?number,
  clientMutationId?: ?string,
|};
export type UpdateCartItemMutationVariables = {|
  input: UpdateCartItemInput
|};
export type UpdateCartItemMutationResponse = {|
  +updateCartItem: {|
    +product: ?{|
      +product_id: ?number
    |}
  |}
|};
export type UpdateCartItemMutation = {|
  variables: UpdateCartItemMutationVariables,
  response: UpdateCartItemMutationResponse,
|};
*/


/*
mutation UpdateCartItemMutation(
  $input: UpdateCartItemInput!
) {
  updateCartItem(input: $input) {
    product {
      product_id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateCartItemInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateCartItem",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateCartItemPayload",
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
            "name": "product_id",
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
    "name": "UpdateCartItemMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateCartItemMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateCartItemMutation",
    "id": null,
    "text": "mutation UpdateCartItemMutation(\n  $input: UpdateCartItemInput!\n) {\n  updateCartItem(input: $input) {\n    product {\n      product_id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9fef72e2371aafe3074f8cfd2e30b847';

module.exports = node;
