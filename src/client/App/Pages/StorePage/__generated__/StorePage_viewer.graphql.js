/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Cart_cart$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type StorePage_viewer$ref: FragmentReference;
declare export opaque type StorePage_viewer$fragmentType: StorePage_viewer$ref;
export type StorePage_viewer = {|
  +user_id: ?number,
  +$fragmentRefs: Cart_cart$ref,
  +$refType: StorePage_viewer$ref,
|};
export type StorePage_viewer$data = StorePage_viewer;
export type StorePage_viewer$key = {
  +$data?: StorePage_viewer$data,
  +$fragmentRefs: StorePage_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "StorePage_viewer",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "id",
      "type": "Int",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "user_id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Cart_cart",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '5e3d15fcc97db8ce7c6f3c7d3c462872';

module.exports = node;
