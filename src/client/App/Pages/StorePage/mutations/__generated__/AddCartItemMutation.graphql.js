/**
 * @flow
 * @relayHash cbd197e6330021745e6491a2403b919d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddCartItemInput = {|
  product_id?: ?number,
  quantity?: ?number,
  size_id?: ?number,
  user_id?: ?number,
  clientMutationId?: ?string,
|};
export type AddCartItemMutationVariables = {|
  input: AddCartItemInput
|};
export type AddCartItemMutationResponse = {|
  +addCartItem: {|
    +product: ?{|
      +product_id: ?number
    |}
  |}
|};
export type AddCartItemMutation = {|
  variables: AddCartItemMutationVariables,
  response: AddCartItemMutationResponse,
|};
*/


/*
mutation AddCartItemMutation(
  $input: AddCartItemInput!
) {
  addCartItem(input: $input) {
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
    "type": "AddCartItemInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addCartItem",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AddCartItemPayload",
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
    "name": "AddCartItemMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddCartItemMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddCartItemMutation",
    "id": null,
    "text": "mutation AddCartItemMutation(\n  $input: AddCartItemInput!\n) {\n  addCartItem(input: $input) {\n    product {\n      product_id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '37b80b44d17c4edac6b346faf31bd600';

module.exports = node;
