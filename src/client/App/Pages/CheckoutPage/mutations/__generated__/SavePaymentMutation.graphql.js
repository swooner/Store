/**
 * @flow
 * @relayHash f00e679a87491c65691f842f9647897e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SavePaymentInput = {|
  user_id?: ?number,
  card_name?: ?string,
  card_number?: ?string,
  expiration_month?: ?number,
  expiration_year?: ?number,
  clientMutationId?: ?string,
|};
export type SavePaymentMutationVariables = {|
  input: SavePaymentInput
|};
export type SavePaymentMutationResponse = {|
  +savePayment: {|
    +user: ?{|
      +user_id: ?number
    |}
  |}
|};
export type SavePaymentMutation = {|
  variables: SavePaymentMutationVariables,
  response: SavePaymentMutationResponse,
|};
*/


/*
mutation SavePaymentMutation(
  $input: SavePaymentInput!
) {
  savePayment(input: $input) {
    user {
      user_id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SavePaymentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "savePayment",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "SavePaymentPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "user_id",
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
    "name": "SavePaymentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SavePaymentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SavePaymentMutation",
    "id": null,
    "text": "mutation SavePaymentMutation(\n  $input: SavePaymentInput!\n) {\n  savePayment(input: $input) {\n    user {\n      user_id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dd14fa452a4d98228bea4831c4786b26';

module.exports = node;
