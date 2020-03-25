/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductPage_product$ref: FragmentReference;
declare export opaque type ProductPage_product$fragmentType: ProductPage_product$ref;
export type ProductPage_product = {|
  +product: ?{|
    +brand: ?string,
    +name: ?string,
    +description: ?string,
    +price: ?number,
  |},
  +$refType: ProductPage_product$ref,
|};
export type ProductPage_product$data = ProductPage_product;
export type ProductPage_product$key = {
  +$data?: ProductPage_product$data,
  +$fragmentRefs: ProductPage_product$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProductPage_product",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "product_id",
      "type": "ID",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "product",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "product_id",
          "variableName": "product_id"
        }
      ],
      "concreteType": "Product",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "brand",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "description",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "price",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd5aebd3839124c4c3bb9c53ee1ba73e9';

module.exports = node;
