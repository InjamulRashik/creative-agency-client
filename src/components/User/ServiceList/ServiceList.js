import React from "react";
import SideBar from "../../SharedComponent/SideBar/SideBar";
import ServiceListDetails from "../ServiceListDetails/ServiceListDetails";
import service1 from "../../../images/icons/service1.png";
import service2 from "../../../images/icons/service2.png";
import service3 from "../../../images/icons/service3.png";

const ServiceList = () => {
  const services = [
    {
      img: service1,
      name: "Web & Mobile Design",
      details:
        "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    },
    {
      img: service2,
      name: "Graphic Design",
      details:
        "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
    },
    {
      img: service3,
      name: "Web Development",
      details:
        "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
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
                  Back to Home <span class="sr-only">(current)</span>
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
