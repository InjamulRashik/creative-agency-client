import React from "react";
import frame from "../../../images/logos/Frame.png";
import "./HeaderContent.css";

const HeaderContent = () => {
  return (
    <main
      style={{ height: "908px " }}
      className="d-flex align-items-center row main-content"
    >
      <div className="col-md-4 offset-md-1 ">
        <h1 style={{ fontSize: "48px" }}>
          <span style={{ fontWeight: "bold" }}>
            Let's Grow Your <br /> Brand To The <br /> Next Level
          </span>
        </h1>{" "}
        <br />
        <p style={{ marginBottom: "10px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo
          ipsum duis laoreet maecenas. Feugiat
        </p>{" "}
        <br />
        <button
          style={{ width: "170px", padding: "10px 0 10px 0" }}
          className="btn btn-dark"
        >
          Hire us
        </button>
      </div>
      <div className="col-md-6">
        <img className="img-fluid" src={frame} alt="" />
      </div>
    </main>
  );
};

export default HeaderContent;
