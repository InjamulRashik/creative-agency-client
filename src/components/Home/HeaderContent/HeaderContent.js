import React from "react";
import frame from "../../../images/logos/Frame.png";
import "./HeaderContent.css";

const HeaderContent = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-around row mt-5">
          <div className="col-md-4 offset-md-1 ">
            <h1 className="h1-top">
              <b>
                Let’s Grow Your <br /> Brand To The <br /> Next Level
              </b>
            </h1>{" "}
            <br />
            <p className="p-top">
              <b>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat{" "}
              </b>
            </p>{" "}
            <br />
            <a
              className="btn btn-dark"
              style={{ width: " 170px", height: "45px" }}
              href="/alternatelogin"
            >
              Hire us
            </a>
          </div>
          <div className="col-md-6 ">
            <img className="img-fluid" src={frame} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderContent;
