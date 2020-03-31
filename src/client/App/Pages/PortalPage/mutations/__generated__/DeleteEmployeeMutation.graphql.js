/**
 * @flow
 * @relayHash bff0dea7cce891f023fe6ea8fda2b16d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteEmployeeInput = {|
  user_id?: ?number,
  clientMutationId?: ?string,
|};
export type DeleteEmployeeMutationVariables = {|
  input: DeleteEmployeeInput
|};
export type DeleteEmployeeMutationResponse = {|
  +deleteEmployee: {|
    +user: {|
      +user_id: ?number
    |}
  |}
|};
export type DeleteEmployeeMutation = {|
  variables: DeleteEmployeeMutationVariables,
  response: DeleteEmployeeMutationResponse,
|};
*/


/*
mutation DeleteEmployeeMutation(
  $input: DeleteEmployeeInput!
) {
  deleteEmployee(input: $input) {
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
    "type": "DeleteEmployeeInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteEmployee",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteEmployeePayload",
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
    "name": "DeleteEmployeeMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteEmployeeMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteEmployeeMutation",
    "id": null,
    "text": "mutation DeleteEmployeeMutation(\n  $input: DeleteEmployeeInput!\n) {\n  deleteEmployee(input: $input) {\n    user {\n      user_id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '49904b29abdc19381e3843e386f00b42';

module.exports = node;
