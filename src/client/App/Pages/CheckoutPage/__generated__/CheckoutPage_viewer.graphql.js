/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Cart_cart$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CheckoutPage_viewer$ref: FragmentReference;
declare export opaque type CheckoutPage_viewer$fragmentType: CheckoutPage_viewer$ref;
export type CheckoutPage_viewer = {|
  +user_id: ?number,
  +first_name: ?string,
  +last_name: ?string,
  +street: ?string,
  +email_address: ?string,
  +city: ?string,
  +state: ?string,
  +zip_code: ?string,
  +phone_number: ?string,
  +$fragmentRefs: Cart_cart$ref,
  +$refType: CheckoutPage_viewer$ref,
|};
export type CheckoutPage_viewer$data = CheckoutPage_viewer;
export type CheckoutPage_viewer$key = {
  +$data?: CheckoutPage_viewer$data,
  +$fragmentRefs: CheckoutPage_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CheckoutPage_viewer",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "first_name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "last_name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "street",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "email_address",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "city",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "state",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "zip_code",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "phone_number",
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
(node/*: any*/).hash = '3fce693b2e882b3840eb2ef736577eab';

module.exports = node;
