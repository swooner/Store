import React from "react";

const Table = props => {
  console.log("[Table] props: ", props);
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(props.data).map(key => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.values(props.data).map((value, index) => (
            <th key={index}>{value}</th>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
export default Table;
