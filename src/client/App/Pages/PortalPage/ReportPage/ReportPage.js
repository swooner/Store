import React from "react";
import environment from "../../../../helpers/relay-environment";
import {
  graphql,
  createFragmentContainer,
  createRefetchContainer
} from "react-relay";
import { fetchQuery } from "relay-runtime";
import SubmitButton from "../../../Components/SubmitButton/SubmitButton";
import Table from "../../../Components/Table/Table";
class ReportPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMonth: 0,
      newReport: "product-sale"
    };
    this._refetch(this.state.newMonth);
  }

  render() {
    let { report_data_by_month } = this.props;
    console.log("[ReportPage] report_data_by_month", report_data_by_month);
    let tableReportAll;
    this.state.newReport === "total-sale"
      ? (tableReportAll = (
          <Table data={report_data_by_month.get_report_by_month} />
        ))
      : null;

    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log("on Submit this.state.newMonth ", this.state.newMonth);
            this._refetch(this.state.newMonth);
            console.log(
              "[ReportPage]report_data_by_month: ",
              report_data_by_month.get_report_by_month
            );
          }}
        >
          <p>Type of report:</p>
          <select
            onChange={e =>
              this.setState({ newReport: e.target.value }, () => {
                console.log("this.state.newReport ", this.state.newReport);
              })
            }
          >
            <option value="product-sale">Product Sale</option>
            <option value="total-sale">Total Sale</option>
          </select>
          <p>Time period:</p>
          <select
            onChange={e =>
              this.setState({ newMonth: parseInt(e.target.value) })
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
  _refetch = newMonth => {
    this.props.relay.refetch(
      { monthCount: newMonth }, // Our refetchQuery needs to know the `itemID`
      null, // We can use the refetchVariables as renderVariables
      () => {
        console.log("Refetch done");
      },
      { force: true } // Assuming we've configured a network layer cache, we want to ensure we fetch the latest data.
    );
  };
}

export default createRefetchContainer(
  ReportPage,
  {
    report_data_by_month: graphql`
      fragment ReportPage_report_data_by_month on Query
        @argumentDefinitions(monthCount: { type: "Int" }) {
        get_report_by_month(monthCount: $monthCount) {
          total_sale
          total_sale_cash
          total_sale_card
          total_customer
        }
      }
    `
  },
  graphql`
    query ReportPageRefetchQuery($monthCount: Int) {
      ...ReportPage_report_data_by_month @arguments(monthCount: $monthCount)
    }
  `
);
// export default ReportPage;
