import React from "react";
import "./ServiceListDetails.css";
import img from "../../../images/icons/service1.png";

const ServiceListDetails = (props) => {
  const { serviceName, details, status } = props.service;
  const statusButton = {
    width: "108px",
    height: "40px",
    border: "none",
    borderRadius: "5px",
  };
  if (status === "Pending") {
    statusButton.backgroundColor = "#FFE3E3";
    statusButton.color = "#FF4545";
  }
  if (status === "Done") {
    statusButton.backgroundColor = "#C6FFE0";
    statusButton.color = "#009444";
  }
  if (status === "On Going") {
    statusButton.backgroundColor = "#ffefcf";
    statusButton.color = "#FFBD3E";
  }
  return (
    <div
      style={{ textAlign: "center", padding: "34px 38px 39px 50px" }}
      className="col-md-4 serviceList"
    >
      <img style={{ width: "74px", marginBottom: "30px" }} src={img} alt="" />
      <h4>
        <b>{serviceName}</b>
      </h4>{" "}
      <br />
      <p className="text-secondary">{details}</p>
      <button style={statusButton}>{status}</button>
    </div>
  );
};

export default ServiceListDetails;
