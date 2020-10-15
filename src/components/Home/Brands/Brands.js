import React from "react";
import airbnb from "../../../images/logos/airbnb.png";
import google from "../../../images/logos/google.png";
import netflix from "../../../images/logos/netflix.png";
import slack from "../../../images/logos/slack.png";
import uber from "../../../images/logos/uber.png";

const Brands = () => {
  return (
    <div
      style={{ margin: "90px 0px 0px 100px", padding: "0px 0px" }}
      className="row d-flex justify-content-center align-items-center mr-auto"
    >
      <div className="col-md-2 mb-5 mr-5">
        <img style={{ width: "140px" }} src={slack} alt="" />{" "}
      </div>
      <div className="col-md-2 mb-5 mr-5">
        <img style={{ width: "129px" }} src={google} alt="" />
      </div>
      <div className="col-md-2 mb-5 mr-5">
        <img style={{ width: "99px" }} src={uber} alt="" />
      </div>
      <div className="col-md-2 mb-5 mr-5">
        <img style={{ width: "120px" }} src={netflix} alt="" />
      </div>
      <div className="col-md-2 mb-5 mr-5">
        <img style={{ width: "161px" }} src={airbnb} alt="" />
      </div>
    </div>
  );
};

export default Brands;
