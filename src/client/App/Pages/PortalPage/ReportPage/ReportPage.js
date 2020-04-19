import React from "react";

// relay
import { graphql, createRefetchContainer } from "react-relay";

// components
import SubmitButton from "../../../Components/SubmitButton/SubmitButton";
import Table from "../../../Components/Table/Table";

class ReportPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMonth: 0,
      newReport: "product-sale",
      newByMonth: "byMonth"
    };
    this._refetch(this.state.newByMonth, this.state.newMonth);
  }

  render() {
    let {
      report_data_by_month,
      each_product_report_data_by_month
    } = this.props;
    let tableReportAll;
    if (this.state.newReport === "total-sale") {
      tableReportAll = <Table {...report_data_by_month.get_report_by_month} />;
    } else if (this.state.newReport === "product-sale") {
      tableReportAll = (
        <Table
          {...each_product_report_data_by_month.get_each_product_report_by_month}
        />
      );
    }
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this._refetch(this.state.newByMonth, this.state.newMonth);
          }}
        >
          <p>Type of report:</p>
          <select onChange={e => this.setState({ newReport: e.target.value })}>
            <option value="product-sale">Product Sale</option>
            <option value="total-sale">Total Sale</option>
          </select>
          <p>Time period:</p>
          <select
            onChange={e =>
              this.setState({ newMonth: parseInt(e.target.value) }, () => {
                if (this.state.newMonth == 100) {
                  this.setState({ newByMonth: "" });
                } else {
                  this.setState({ newByMonth: "byMonth" });
                }
              })
            }
          >
            <option value={0}>This month</option>
            <option value={-1}>Last month</option>
            <option value={100}>Overall</option>
          </select>
          <SubmitButton type="submit" text="Submit" />
        </form>

        {tableReportAll}
      </div>
    );
  }
  _refetch = (newByMonth, newMonth) => {
    this.props.relay.refetch(
      { byMonth: newByMonth, monthCount: newMonth },
      null,
      () => {
        console.log("Refetch done");
      },
      { force: true }
    );
  };
}

export default createRefetchContainer(
  ReportPage,
  {
    report_data_by_month: graphql`
      fragment ReportPage_report_data_by_month on Query
        @argumentDefinitions(
          byMonth: { type: "String" }
          monthCount: { type: "Int" }
        ) {
        get_report_by_month(byMonth: $byMonth, monthCount: $monthCount) {
          total_sale
          total_sale_cash
          total_sale_card
          total_customer
        }
      }
    `,
    each_product_report_data_by_month: graphql`
      fragment ReportPage_each_product_report_data_by_month on Query
        @argumentDefinitions(
          byMonth: { type: "String" }
          monthCount: { type: "Int" }
        ) {
        get_each_product_report_by_month(
          byMonth: $byMonth
          monthCount: $monthCount
        ) {
          product_id
          product_name
          total_sale
        }
      }
    `
  },
  graphql`
    query ReportPageRefetchQuery($byMonth: String, $monthCount: Int) {
      ...ReportPage_report_data_by_month
        @arguments(byMonth: $byMonth, monthCount: $monthCount)
      ...ReportPage_each_product_report_data_by_month
        @arguments(byMonth: $byMonth, monthCount: $monthCount)
    }
  `
);
// export default ReportPage;
