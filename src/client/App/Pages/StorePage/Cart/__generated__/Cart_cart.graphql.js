/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Cart_cart$ref: FragmentReference;
declare export opaque type Cart_cart$fragmentType: Cart_cart$ref;
export type Cart_cart = {|
  +cart: ?{|
    +items: ?$ReadOnlyArray<?{|
      +product: ?{|
        +name: ?string
      |},
      +size: ?string,
      +quantity: ?number,
      +cost: ?number,
    |}>,
    +total: ?number,
  |},
  +$refType: Cart_cart$ref,
|};
export type Cart_cart$data = Cart_cart;
export type Cart_cart$key = {
  +$data?: Cart_cart$data,
  +$fragmentRefs: Cart_cart$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Cart_cart",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "cart",
      "storageKey": null,
      "args": null,
      "concreteType": "Cart",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "items",
          "storageKey": null,
          "args": null,
          "concreteType": "CartItem",
          "plural": true,
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
                  "name": "name",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "size",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "quantity",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cost",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "total",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f69dcb7b26dd3acf6688b8e9cb7047b9';

module.exports = node;
