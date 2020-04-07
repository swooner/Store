/**
 * @flow
 * @relayHash 1aa0be5a56d54cae3c0c9da69f9ad23f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ValidatePaymentInput = {|
  card_name?: ?string,
  card_number?: ?string,
  expiration_month?: ?number,
  expiration_year?: ?number,
  security_code?: ?number,
  clientMutationId?: ?string,
|};
export type ValidatePaymentMutationVariables = {|
  input: ValidatePaymentInput
|};
export type ValidatePaymentMutationResponse = {|
  +validatePayment: {|
    +user: ?{|
      +user_id: ?number
    |}
  |}
|};
export type ValidatePaymentMutation = {|
  variables: ValidatePaymentMutationVariables,
  response: ValidatePaymentMutationResponse,
|};
*/


/*
mutation ValidatePaymentMutation(
  $input: ValidatePaymentInput!
) {
  validatePayment(input: $input) {
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
    "type": "ValidatePaymentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "validatePayment",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ValidatePaymentPayload",
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
    "name": "ValidatePaymentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ValidatePaymentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ValidatePaymentMutation",
    "id": null,
    "text": "mutation ValidatePaymentMutation(\n  $input: ValidatePaymentInput!\n) {\n  validatePayment(input: $input) {\n    user {\n      user_id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1b9ebd701d856a696904fc6051fb715e';

module.exports = node;
