/**
 * @flow
 * @relayHash 2b8826e4590940fb74668b660dc01bcf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ReportPage_each_product_report_data_by_month$ref = any;
type ReportPage_report_data_by_month$ref = any;
export type ReportPageRefetchQueryVariables = {|
  byMonth?: ?string,
  monthCount?: ?number,
|};
export type ReportPageRefetchQueryResponse = {|
  +$fragmentRefs: ReportPage_report_data_by_month$ref & ReportPage_each_product_report_data_by_month$ref
|};
export type ReportPageRefetchQuery = {|
  variables: ReportPageRefetchQueryVariables,
  response: ReportPageRefetchQueryResponse,
|};
*/


/*
query ReportPageRefetchQuery(
  $byMonth: String
  $monthCount: Int
) {
  ...ReportPage_report_data_by_month_13VLqQ
  ...ReportPage_each_product_report_data_by_month_13VLqQ
}

fragment ReportPage_each_product_report_data_by_month_13VLqQ on Query {
  get_each_product_report_by_month(byMonth: $byMonth, monthCount: $monthCount) {
    product_id
    product_name
    total_sale
  }
}

fragment ReportPage_report_data_by_month_13VLqQ on Query {
  get_report_by_month(byMonth: $byMonth, monthCount: $monthCount) {
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
v1 = [
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "total_sale",
  "args": null,
  "storageKey": null
};
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
      },
      {
        "kind": "FragmentSpread",
        "name": "ReportPage_each_product_report_data_by_month",
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
          (v2/*: any*/),
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "get_each_product_report_by_month",
        "storageKey": null,
        "args": (v1/*: any*/),
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
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ReportPageRefetchQuery",
    "id": null,
    "text": "query ReportPageRefetchQuery(\n  $byMonth: String\n  $monthCount: Int\n) {\n  ...ReportPage_report_data_by_month_13VLqQ\n  ...ReportPage_each_product_report_data_by_month_13VLqQ\n}\n\nfragment ReportPage_each_product_report_data_by_month_13VLqQ on Query {\n  get_each_product_report_by_month(byMonth: $byMonth, monthCount: $monthCount) {\n    product_id\n    product_name\n    total_sale\n  }\n}\n\nfragment ReportPage_report_data_by_month_13VLqQ on Query {\n  get_report_by_month(byMonth: $byMonth, monthCount: $monthCount) {\n    total_sale\n    total_sale_cash\n    total_sale_card\n    total_customer\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f41f89cae32642396cf1552ceee82872';

module.exports = node;
