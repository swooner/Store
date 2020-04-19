/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ReportPage_each_product_report_data_by_month$ref: FragmentReference;
declare export opaque type ReportPage_each_product_report_data_by_month$fragmentType: ReportPage_each_product_report_data_by_month$ref;
export type ReportPage_each_product_report_data_by_month = {|
  +get_each_product_report_by_month: ?$ReadOnlyArray<?{|
    +product_id: ?number,
    +product_name: ?string,
    +total_sale: ?number,
  |}>,
  +$refType: ReportPage_each_product_report_data_by_month$ref,
|};
export type ReportPage_each_product_report_data_by_month$data = ReportPage_each_product_report_data_by_month;
export type ReportPage_each_product_report_data_by_month$key = {
  +$data?: ReportPage_each_product_report_data_by_month$data,
  +$fragmentRefs: ReportPage_each_product_report_data_by_month$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ReportPage_each_product_report_data_by_month",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "byMonth",
      "type": "String",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "monthCount",
      "type": "Int",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "get_each_product_report_by_month",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "byMonth",
          "variableName": "byMonth"
        },
        {
          "kind": "Variable",
          "name": "monthCount",
          "variableName": "monthCount"
        }
      ],
      "concreteType": "EachProductReport",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "product_id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "product_name",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "total_sale",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ffbba16874c982f6ae5e2f599fe12130';

module.exports = node;
