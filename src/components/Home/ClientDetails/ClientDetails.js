import React from "react";
import img from "../../../images/avatar.png";

const ClientDetails = (props) => {
  const { name, companyName, description } = props.client;
  return (
    <React.Fragment>
      <div
        className="mb-2 col-md-4 "
        style={{ borderRight: "1px solid lightgray" }}
      >
        <div className="d-flex align-items-center mt-3">
          <div>
            <img
              style={{ marginRight: "10px" }}
              src={img}
              height="70px"
              alt=""
            />
          </div>
          <div>
            <h5>
              <b>{name}</b>
            </h5>{" "}
            <h6>{companyName}</h6>
          </div>{" "}
        </div>{" "}
        <br />
        <div>
          <p className="text-wrap">{description}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClientDetails;
