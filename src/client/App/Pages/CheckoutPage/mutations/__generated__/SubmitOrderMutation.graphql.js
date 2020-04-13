/**
 * @flow
 * @relayHash 11dbaedd41b68ebda43c8b995e660df7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SubmitOrderInput = {|
  order_id?: ?number,
  saleMethod?: ?string,
  paymentMethod?: ?string,
  addressType?: ?string,
  street?: ?string,
  city?: ?string,
  state?: ?string,
  zip_code?: ?string,
  products?: ?$ReadOnlyArray<?ProductInput>,
  clientMutationId?: ?string,
|};
export type ProductInput = {|
  product_id?: ?number,
  quantity?: ?number,
  name?: ?string,
|};
export type SubmitOrderMutationVariables = {|
  input: SubmitOrderInput
|};
export type SubmitOrderMutationResponse = {|
  +submitOrder: {|
    +order: ?{|
      +order_id: ?number
    |}
  |}
|};
export type SubmitOrderMutation = {|
  variables: SubmitOrderMutationVariables,
  response: SubmitOrderMutationResponse,
|};
*/


/*
mutation SubmitOrderMutation(
  $input: SubmitOrderInput!
) {
  submitOrder(input: $input) {
    order {
      order_id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SubmitOrderInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "submitOrder",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "SubmitOrderPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "order",
        "storageKey": null,
        "args": null,
        "concreteType": "Cart",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "order_id",
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
    "name": "SubmitOrderMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SubmitOrderMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SubmitOrderMutation",
    "id": null,
    "text": "mutation SubmitOrderMutation(\n  $input: SubmitOrderInput!\n) {\n  submitOrder(input: $input) {\n    order {\n      order_id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '976b40e89de7aa706ecbb62bc3f6df9c';

module.exports = node;
