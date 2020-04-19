/**
 * @flow
 * @relayHash 19b98d17aa11c6308921e9a3a89e9ea3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ReportPage_report_data_by_month$ref = any;
export type ReportPageRefetchQueryVariables = {|
  monthCount?: ?number
|};
export type ReportPageRefetchQueryResponse = {|
  +$fragmentRefs: ReportPage_report_data_by_month$ref
|};
export type ReportPageRefetchQuery = {|
  variables: ReportPageRefetchQueryVariables,
  response: ReportPageRefetchQueryResponse,
|};
*/


/*
query ReportPageRefetchQuery(
  $monthCount: Int
) {
  ...ReportPage_report_data_by_month_1wEd0Z
}

fragment ReportPage_report_data_by_month_1wEd0Z on Query {
  get_report_by_month(monthCount: $monthCount) {
    total_sale
    total_sale_cash
    total_sale_card
    total_customer
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "monthCount",
    "type": "Int",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "monthCount",
    "variableName": "monthCount"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ReportPageRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ReportPage_report_data_by_month",
        "args": (v1/*: any*/)
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ReportPageRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "get_report_by_month",
        "storageKey": null,
        "args": (v1/*: any*/),
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
  },
  "params": {
    "operationKind": "query",
    "name": "ReportPageRefetchQuery",
    "id": null,
    "text": "query ReportPageRefetchQuery(\n  $monthCount: Int\n) {\n  ...ReportPage_report_data_by_month_1wEd0Z\n}\n\nfragment ReportPage_report_data_by_month_1wEd0Z on Query {\n  get_report_by_month(monthCount: $monthCount) {\n    total_sale\n    total_sale_cash\n    total_sale_card\n    total_customer\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '40217601f38114ee34552cb1d562a51b';

module.exports = node;
