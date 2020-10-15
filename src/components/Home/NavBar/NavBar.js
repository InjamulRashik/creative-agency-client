import React from "react";
import logo from "../../../logo.png";

const NavBar = () => {
  return (
    <div
      style={{
        paddingLeft: "137px",
        paddingRight: "137px",
        backgroundColor: "#FBD062",
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-light">
        <img style={{ width: "150px" }} src={logo} alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-5">
              <a className="nav-link" href="#.">
                <b style={{ color: "#474747" }}>Home</b>
              </a>
            </li>
            <li className="nav-item mr-5">
              <a style={{ color: "#474747" }} className="nav-link" href="#.">
                Our Portfolio
              </a>
            </li>
            <li className="nav-item mr-5">
              <a style={{ color: "#474747" }} className="nav-link" href="#.">
                Our Team
              </a>
            </li>
            <li className="nav-item mr-5">
              <a style={{ color: "#474747" }} className="nav-link" href="#.">
                Contact Us
              </a>
            </li>
            <li className="nav-item mr-5">
              <a
                style={{ width: "130px", color: "white" }}
                className="nav-link btn btn-dark"
                href="#."
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
