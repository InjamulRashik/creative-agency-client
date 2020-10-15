import React from "react";
import { useHistory } from "react-router-dom";
import "./ServiceDetails.css";

const ServiceDetails = (props) => {
  const { img, name, details } = props.service;
  return (
    <React.Fragment>
      <div
        onClick={() => {
          window.location.href = `/user/order`;
        }}
        style={{ textAlign: "center", padding: "34px 38px 39px 50px" }}
        className="col-md-4 services"
      >
        <img style={{ width: "74px", marginBottom: "30px" }} src={img} alt="" />
        <h4>
          <b>{name}</b>
        </h4>{" "}
        <br />
        <p className="text-secondary">{details}</p>
      </div>
    </React.Fragment>
  );
};

export default ServiceDetails;
