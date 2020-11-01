import React from "react";
import img from "../../../images/avatar.png";

const ClientDetails = (props) => {
  const { name, companyName, description } = props.client;
  return (
    <React.Fragment>
      <div
        className="mb-2 col-md-4 "
        style={{ border: "1px solid black", borderRadius: "4px" }}
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
            <h5>{name}</h5> <h5>{companyName}</h5>
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
