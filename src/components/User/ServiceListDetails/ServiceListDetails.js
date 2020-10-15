import React from "react";
import "./ServiceListDetails.css";

const ServiceListDetails = (props) => {
  const { name, img, details } = props.service;
  return (
    <div
      className="col-md-6"
      style={{ textAlign: "center", padding: "34px 38px 39px 50px" }}
      className="col-md-4 serviceList"
    >
      <img style={{ width: "74px", marginBottom: "30px" }} src={img} alt="" />
      <h4>
        <b>{name}</b>
      </h4>{" "}
      <br />
      <p className="text-secondary">{details}</p>
      <button className="btn btn-danger">Pending</button>
    </div>
  );
};

export default ServiceListDetails;
