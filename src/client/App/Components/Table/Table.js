import React from "react";

const Table = props => {
  console.log("[Table] props: ", props);
  let Data = Object.values(props);
  let typeOf = typeof Data[0];
  console.log("[Table] props: ", Array.isArray(Data));
  console.log("[Table] Data: ", typeOf);
  let renderTable = null;

  if (typeOf === "number") {
    renderTable = (
      <table className="table table-striped">
        <thead>
          <th>Total Sale</th>
          <th>Total Sale by Cash</th>
          <th>Total Sale by Card</th>
          <th>Total Customer</th>
        </thead>
        <tbody>
          <tr>
            {Data.map((data, index) => (
              <td>{data}</td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  } else if (typeOf === "object") {
    renderTable = (
      <table className="table table-striped">
        <thead>
          <th>Product Id</th>
          <th>Product Name</th>
          <th>Total Sale</th>
        </thead>
        <tbody>
          {Data.map((data, index) => (
            <tr key={index}>
              <td>{data.product_id}</td>
              <td>{data.product_name}</td>
              <td>{data.total_sale}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  console.log("[Table] keys: ", Data);
  let test1 = Data.pop();
  Data.forEach(data => {
    console.log(data.product_id);
    console.log(data.product_name);
    console.log(data.total_sale);
  });
  return renderTable;
};
export default Table;
