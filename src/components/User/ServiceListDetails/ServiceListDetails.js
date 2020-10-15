import React from "react";
import "./ServiceListDetails.css";
import img from "../../../images/icons/service1.png";

const ServiceListDetails = (props) => {
  const { serviceName, details, status } = props.service;
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
      <button className="btn btn-danger">{status}</button>
    </div>
  );
};

export default ServiceListDetails;
