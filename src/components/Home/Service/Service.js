import React, { useEffect, useState } from "react";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import service1 from "../../../images/icons/service1.png";
import service2 from "../../../images/icons/service2.png";
import service3 from "../../../images/icons/service3.png";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://calm-mesa-41690.herokuapp.com/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "100px" }} className="">
        <h1>
          <b>
            Provide awesome <span style={{ color: "#7AB259" }}>services</span>
          </b>
        </h1>
      </div>
      <div className="container-fluid">
        <div
          style={{
            padding: "0px 100px 0 100px",
            marginTop: "77px",
            marginBottom: "114px",
          }}
          className="row"
        >
          {services.map((service) => (
            <ServiceDetails service={service}></ServiceDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
