import React from "react";

const AdminServiceListTable = (props) => {
  const { name, email, serviceName, details, status } = props.serviceList;
  return (
    <React.Fragment>
      <tr>
        <th scope="row">{name}</th>
        <td>{email}</td>
        <td>{serviceName}</td>
        <td>{details}</td>
        <td>
          <button className="btn btn-danger">{status}</button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default AdminServiceListTable;
