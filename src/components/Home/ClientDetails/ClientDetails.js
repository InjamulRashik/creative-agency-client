import React from "react";

const ClientDetails = (props) => {
  const { img, name, designation, description } = props.client;
  return (
    <React.Fragment>
      <div
        style={{
          padding: "34px 0px 39px 20px",
          boxSizing: "border-box",
          borderRadius: "4px",
          marginBottom: "5px",
        }}
        className="col-md-4"
      >
        <div
          style={{ paddingLeft: "10px" }}
          className="row d-flex align-items-center"
        >
          <img
            style={{
              width: "74px",
              marginBottom: "30px",
              marginRight: "30px",
            }}
            src={img}
            alt=""
          />
          <div>
            {" "}
            <h4>
              <b>{name}</b>
            </h4>{" "}
            <h5>{designation}</h5>
          </div>
        </div>
        <br />
        <p style={{ wordWrap: "break-word" }} className="text-secondary">
          {description}
        </p>
      </div>
    </React.Fragment>
  );
};

export default ClientDetails;
