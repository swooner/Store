/**
 * @flow
 * @relayHash a6f1ae73019bffd4a67e6855ef152d21
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteCategoryInput = {|
  category_id: number,
  clientMutationId?: ?string,
|};
export type DeleteCategoryMutationVariables = {|
  input: DeleteCategoryInput
|};
export type DeleteCategoryMutationResponse = {|
  +deleteCategory: {|
    +category: {|
      +category_id: ?number
    |}
  |}
|};
export type DeleteCategoryMutation = {|
  variables: DeleteCategoryMutationVariables,
  response: DeleteCategoryMutationResponse,
|};
*/


/*
mutation DeleteCategoryMutation(
  $input: DeleteCategoryInput!
) {
  deleteCategory(input: $input) {
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
    "type": "DeleteCategoryInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteCategory",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteCategoryPayload",
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
    "name": "DeleteCategoryMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteCategoryMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteCategoryMutation",
    "id": null,
    "text": "mutation DeleteCategoryMutation(\n  $input: DeleteCategoryInput!\n) {\n  deleteCategory(input: $input) {\n    category {\n      category_id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ed75f48b81d25a17eced5d12360f6b9b';

module.exports = node;
