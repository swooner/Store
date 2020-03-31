/**
 * @flow
 * @relayHash eebd5281bcff8cecdcb9c57b11ed95dc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateRoleInput = {|
  role?: ?string,
  clientMutationId?: ?string,
|};
export type UpdateRoleMutationVariables = {|
  input: UpdateRoleInput
|};
export type UpdateRoleMutationResponse = {|
  +updateRole: {|
    +user: {|
      +user_id: ?number
    |}
  |}
|};
export type UpdateRoleMutation = {|
  variables: UpdateRoleMutationVariables,
  response: UpdateRoleMutationResponse,
|};
*/


/*
mutation UpdateRoleMutation(
  $input: UpdateRoleInput!
) {
  updateRole(input: $input) {
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
    "type": "UpdateRoleInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateRole",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateRolePayload",
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
    "name": "UpdateRoleMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateRoleMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateRoleMutation",
    "id": null,
    "text": "mutation UpdateRoleMutation(\n  $input: UpdateRoleInput!\n) {\n  updateRole(input: $input) {\n    user {\n      user_id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8248ed3619997e06cf8bde52ab61f5e4';

module.exports = node;
