/**
 * @flow
 * @relayHash da2f4be29c2d9fdfbdf3bec8a139de37
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignUpInput = {|
  Cus_Fname?: ?string,
  Cus_Lname?: ?string,
  Cus_AccName?: ?string,
  Cus_AccPass?: ?string,
  Cus_address?: ?string,
  Cus_city?: ?string,
  Cus_state?: ?string,
  Cus_zipcode?: ?string,
  Cus_phone?: ?string,
  Cus_Email?: ?string,
  Cus_isEmployee?: ?boolean,
  clientMutationId?: ?string,
|};
export type SignUpMutationVariables = {|
  input: SignUpInput
|};
export type SignUpMutationResponse = {|
  +signUp: {|
    +customer: {|
      +customer_id: ?number
    |}
  |}
|};
export type SignUpMutation = {|
  variables: SignUpMutationVariables,
  response: SignUpMutationResponse,
|};
*/


/*
mutation SignUpMutation(
  $input: SignUpInput!
) {
  signUp(input: $input) {
    customer {
      customer_id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SignUpInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "signUp",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "SignUpPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "customer",
        "storageKey": null,
        "args": null,
        "concreteType": "Customer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "customer_id",
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
    "name": "SignUpMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SignUpMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SignUpMutation",
    "id": null,
    "text": "mutation SignUpMutation(\n  $input: SignUpInput!\n) {\n  signUp(input: $input) {\n    customer {\n      customer_id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2a296dc16491e6e629b55a4eb191ab05';

module.exports = node;
