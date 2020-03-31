/**
 * @flow
 * @relayHash dbfa1e8315c9d7690912fa6f652ffe35
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddProductInput = {|
  category_id?: ?number,
  name: string,
  description?: ?string,
  price: number,
  quantity: number,
  threshold: number,
  employee_id?: ?number,
  clientMutationId?: ?string,
|};
export type AddProductMutationVariables = {|
  input: AddProductInput
|};
export type AddProductMutationResponse = {|
  +addProduct: {|
    +product: {|
      +product_id: ?number
    |}
  |}
|};
export type AddProductMutation = {|
  variables: AddProductMutationVariables,
  response: AddProductMutationResponse,
|};
*/


/*
mutation AddProductMutation(
  $input: AddProductInput!
) {
  addProduct(input: $input) {
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
    "type": "AddProductInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addProduct",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AddProductPayload",
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
    "name": "AddProductMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddProductMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddProductMutation",
    "id": null,
    "text": "mutation AddProductMutation(\n  $input: AddProductInput!\n) {\n  addProduct(input: $input) {\n    product {\n      product_id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6343b29e8c5b9841c81086ee6ab4236b';

module.exports = node;
