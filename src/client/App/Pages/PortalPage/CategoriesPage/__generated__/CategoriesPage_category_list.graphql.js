/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CategoriesPage_category_list$ref: FragmentReference;
declare export opaque type CategoriesPage_category_list$fragmentType: CategoriesPage_category_list$ref;
export type CategoriesPage_category_list = {|
  +category_list: ?$ReadOnlyArray<?{|
    +category_id: ?number,
    +name: ?string,
    +description: ?string,
  |}>,
  +$refType: CategoriesPage_category_list$ref,
|};
export type CategoriesPage_category_list$data = CategoriesPage_category_list;
export type CategoriesPage_category_list$key = {
  +$data?: CategoriesPage_category_list$data,
  +$fragmentRefs: CategoriesPage_category_list$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CategoriesPage_category_list",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "first",
      "type": "Int",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "category_list",
      "storageKey": "category_list(first:10)",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 10
        }
      ],
      "concreteType": "Category",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "category_id",
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
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '883adc6eafcbe61fde8a637987300b46';

module.exports = node;
