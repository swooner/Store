/**
 * @flow
 * @relayHash aa093256b6d49b2e71cea866d5f6c2ab
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteProductInput = {|
  product_id: number,
  clientMutationId?: ?string,
|};
export type DeleteProductMutationVariables = {|
  input: DeleteProductInput
|};
export type DeleteProductMutationResponse = {|
  +deleteProduct: {|
    +product: {|
      +product_id: ?number
    |}
  |}
|};
export type DeleteProductMutation = {|
  variables: DeleteProductMutationVariables,
  response: DeleteProductMutationResponse,
|};
*/


/*
mutation DeleteProductMutation(
  $input: DeleteProductInput!
) {
  deleteProduct(input: $input) {
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
    "type": "DeleteProductInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteProduct",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteProductPayload",
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
    "name": "DeleteProductMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteProductMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteProductMutation",
    "id": null,
    "text": "mutation DeleteProductMutation(\n  $input: DeleteProductInput!\n) {\n  deleteProduct(input: $input) {\n    product {\n      product_id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b3b5b3b74b524c1b9cf178bb41ac85be';

module.exports = node;
