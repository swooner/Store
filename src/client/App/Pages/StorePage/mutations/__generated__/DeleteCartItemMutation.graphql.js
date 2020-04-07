/**
 * @flow
 * @relayHash b506ef16209dac09abad5810485046ef
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteCartItemInput = {|
  order_id?: ?number,
  product_id?: ?number,
  clientMutationId?: ?string,
|};
export type DeleteCartItemMutationVariables = {|
  input: DeleteCartItemInput
|};
export type DeleteCartItemMutationResponse = {|
  +deleteCartItem: {|
    +product: ?{|
      +product_id: ?number
    |}
  |}
|};
export type DeleteCartItemMutation = {|
  variables: DeleteCartItemMutationVariables,
  response: DeleteCartItemMutationResponse,
|};
*/


/*
mutation DeleteCartItemMutation(
  $input: DeleteCartItemInput!
) {
  deleteCartItem(input: $input) {
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
    "type": "DeleteCartItemInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteCartItem",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteCartItemPayload",
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
    "name": "DeleteCartItemMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteCartItemMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteCartItemMutation",
    "id": null,
    "text": "mutation DeleteCartItemMutation(\n  $input: DeleteCartItemInput!\n) {\n  deleteCartItem(input: $input) {\n    product {\n      product_id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e9b4438cf86bc860090852c797ecb08a';

module.exports = node;
