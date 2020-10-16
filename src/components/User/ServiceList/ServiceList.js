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
    fetch(
      "https://calm-mesa-41690.herokuapp.com/servicelist?email=" +
        loggedInUser.email
    )
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
                <h6 className="text-success">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-person-circle"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                    <path
                      fill-rule="evenodd"
                      d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                    />
                  </svg>
                  <b className="ml-2">
                    {loggedInUser.name} <span class="sr-only">(current)</span>
                  </b>
                </h6>
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
