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
    +order_id: ?number,
    +items: ?$ReadOnlyArray<?{|
      +product: ?{|
        +product_id: ?number,
        +name: ?string,
        +price: ?number,
        +sizes: ?$ReadOnlyArray<?{|
          +product_size_id: ?number,
          +name: ?string,
        |}>,
      |},
      +size: ?{|
        +product_size_id: ?number,
        +name: ?string,
      |},
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


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "product_size_id",
    "args": null,
    "storageKey": null
  },
  (v0/*: any*/)
];
return {
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
          "kind": "ScalarField",
          "alias": null,
          "name": "order_id",
          "args": null,
          "storageKey": null
        },
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
                  "name": "product_id",
                  "args": null,
                  "storageKey": null
                },
                (v0/*: any*/),
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "price",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "sizes",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "ProductSize",
                  "plural": true,
                  "selections": (v1/*: any*/)
                }
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "size",
              "storageKey": null,
              "args": null,
              "concreteType": "ProductSize",
              "plural": false,
              "selections": (v1/*: any*/)
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
})();
// prettier-ignore
(node/*: any*/).hash = 'a861f027c231e026b28b7694e031b381';

module.exports = node;
