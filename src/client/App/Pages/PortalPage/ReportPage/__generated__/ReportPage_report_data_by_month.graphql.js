/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ReportPage_report_data_by_month$ref: FragmentReference;
declare export opaque type ReportPage_report_data_by_month$fragmentType: ReportPage_report_data_by_month$ref;
export type ReportPage_report_data_by_month = {|
  +get_report_by_month: ?{|
    +total_sale: ?number,
    +total_sale_cash: ?number,
    +total_sale_card: ?number,
    +total_customer: ?number,
  |},
  +$refType: ReportPage_report_data_by_month$ref,
|};
export type ReportPage_report_data_by_month$data = ReportPage_report_data_by_month;
export type ReportPage_report_data_by_month$key = {
  +$data?: ReportPage_report_data_by_month$data,
  +$fragmentRefs: ReportPage_report_data_by_month$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ReportPage_report_data_by_month",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
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
      "name": "get_report_by_month",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "monthCount",
          "variableName": "monthCount"
        }
      ],
      "concreteType": "Report",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "total_sale",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "total_sale_cash",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "total_sale_card",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "total_customer",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'dc7c11b446c7e05ae2e86c20c0be7640';

module.exports = node;
