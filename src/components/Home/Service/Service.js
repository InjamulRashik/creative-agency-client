import React from "react";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import service1 from "../../../images/icons/service1.png";
import service2 from "../../../images/icons/service2.png";
import service3 from "../../../images/icons/service3.png";

const Service = () => {
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
    <div>
      <div style={{ textAlign: "center", marginTop: "100px" }} className="">
        <h1>
          <b>
            Provide awesome <span style={{ color: "#7AB259" }}>services</span>
          </b>
        </h1>
      </div>
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
  );
};

export default Service;
