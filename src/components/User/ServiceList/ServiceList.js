import React, { useContext, useEffect, useState } from "react";
import SideBar from "../../SharedComponent/SideBar/SideBar";
import ServiceListDetails from "../ServiceListDetails/ServiceListDetails";
import service1 from "../../../images/icons/service1.png";
import service2 from "../../../images/icons/service2.png";
import service3 from "../../../images/icons/service3.png";
import { UserContext } from "../../../App";

const ServiceList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/servicelist?email=" + loggedInUser.email)
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  const serviceImages = [
    {
      img: service1,
    },
    {
      img: service2,
    },
    {
      img: service3,
    },
  ];
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
                  {loggedInUser.name} <span class="sr-only">(current)</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            {services.map((service) => (
              <ServiceListDetails service={service}></ServiceListDetails>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
