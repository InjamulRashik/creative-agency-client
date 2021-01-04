import React, { useEffect, useState } from "react";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import service1 from "../../../images/icons/service1.png";
import service2 from "../../../images/icons/service2.png";
import service3 from "../../../images/icons/service3.png";
import { trackPromise } from "react-promise-tracker";
import { usePromiseTracker } from "react-promise-tracker";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/core";

const override = css``;

const Service = () => {
  const { promiseInProgress } = usePromiseTracker();
  const [services, setServices] = useState([]);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#F8DC1C");
  useEffect(() => {
    trackPromise(
      fetch("https://calm-mesa-41690.herokuapp.com/services")
        .then((response) => response.json())
        .then((data) => {
          setServices(data);
        })
    );
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
          {promiseInProgress === true ? (
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="">
                  <PropagateLoader
                    color={color}
                    loading={loading}
                    size={15}
                    css={override}
                  ></PropagateLoader>
                </div>
              </div>
            </div>
          ) : (
            services.map((service) => (
              <ServiceDetails service={service}></ServiceDetails>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;
