/**
 * @flow
 * @relayHash 828429d2753b96926d038323b54757ab
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddCategoryInput = {|
  name: string,
  description?: ?string,
  employee_id?: ?number,
  clientMutationId?: ?string,
|};
export type AddCategoryMutationVariables = {|
  input: AddCategoryInput
|};
export type AddCategoryMutationResponse = {|
  +addCategory: {|
    +category: {|
      +category_id: ?number
    |}
  |}
|};
export type AddCategoryMutation = {|
  variables: AddCategoryMutationVariables,
  response: AddCategoryMutationResponse,
|};
*/


/*
mutation AddCategoryMutation(
  $input: AddCategoryInput!
) {
  addCategory(input: $input) {
    category {
      category_id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddCategoryInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addCategory",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AddCategoryPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "category",
        "storageKey": null,
        "args": null,
        "concreteType": "Category",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "category_id",
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
    "name": "AddCategoryMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddCategoryMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddCategoryMutation",
    "id": null,
    "text": "mutation AddCategoryMutation(\n  $input: AddCategoryInput!\n) {\n  addCategory(input: $input) {\n    category {\n      category_id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4f726b4fc1eb2d0b12632e00354b62ec';

module.exports = node;
