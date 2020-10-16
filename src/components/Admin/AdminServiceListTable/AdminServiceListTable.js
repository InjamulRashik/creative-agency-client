import React, { useState } from "react";

const AdminServiceListTable = (props) => {
  const { _id, name, email, serviceName, details, status } = props.serviceList;
  const statuses = ["Pending", "On Going", "Done"];
  const handleChange = (e) => {
    const data = { id: e.target.name, status: e.target.value };
    fetch("https://calm-mesa-41690.herokuapp.com/updateOrder", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {});
  };

  return (
    <React.Fragment>
      <tr>
        <th scope="row">{name}</th>
        <td>{email}</td>
        <td>{serviceName}</td>
        <td>{details}</td>
        <td>
          <select
            className="btn btn-primary"
            onChange={handleChange}
            name={_id}
            id=""
          >
            <option value={status}>{status}</option>
            {statuses
              .filter((st) => statuses !== st)
              .map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
          </select>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default AdminServiceListTable;
