import React from "react";
import SideBar from "../../SharedComponent/SideBar/SideBar";

const ServiceList = () => {
  return (
    <div className="d-flex" id="wrapper">
      <SideBar></SideBar>
      <div className="bg-light" id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-white  border-0">
          <p
            style={{
              fontWeight: "bolder",
              fontSize: "22px",
              color: "#0C0C0C",
              paddingTop: "25px",
            }}
          >
            Service List
          </p>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <button
                  onClick={() => {
                    window.location = "/";
                  }}
                  className=" btn btn-primary"
                >
                  Back to Home <span class="sr-only">(current)</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ServiceList;
