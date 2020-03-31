/**
 * @flow
 * @relayHash 1593b81c15d929bd3fd3a78852196083
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AddEmployee_user_search$ref = any;
export type AddEmployeeQueryVariables = {|
  query?: ?string,
  first?: ?number,
|};
export type AddEmployeeQueryResponse = {|
  +$fragmentRefs: AddEmployee_user_search$ref
|};
export type AddEmployeeQuery = {|
  variables: AddEmployeeQueryVariables,
  response: AddEmployeeQueryResponse,
|};
*/


/*
query AddEmployeeQuery(
  $query: String
  $first: Int
) {
  ...AddEmployee_user_search_ReqLQ
}

fragment AddEmployee_user_search_ReqLQ on Query {
  user_search(query: $query, first: $first) {
    edges {
      node {
        user_id
        first_name
        last_name
        account_name
        employee_info {
          role
        }
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "query",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddEmployeeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "AddEmployee_user_search",
        "args": (v1/*: any*/)
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddEmployeeQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user_search",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UserConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "UserEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
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
                    "name": "account_name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "employee_info",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "EmployeeInfo",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "role",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "user_search",
        "args": (v1/*: any*/),
        "handle": "connection",
        "key": "AddEmployee_user_search",
        "filters": [
          "query"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AddEmployeeQuery",
    "id": null,
    "text": "query AddEmployeeQuery(\n  $query: String\n  $first: Int\n) {\n  ...AddEmployee_user_search_ReqLQ\n}\n\nfragment AddEmployee_user_search_ReqLQ on Query {\n  user_search(query: $query, first: $first) {\n    edges {\n      node {\n        user_id\n        first_name\n        last_name\n        account_name\n        employee_info {\n          role\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '335f8128213c718f9cd7d48fab5f0f2c';

module.exports = node;
