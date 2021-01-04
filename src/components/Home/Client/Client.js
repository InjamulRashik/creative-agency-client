import React, { useEffect, useState } from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";
import ClientDetails from "../ClientDetails/ClientDetails";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/core";

const override = css``;

const Client = () => {
  const [clients, setClients] = useState([]);
  const { promiseInProgress } = usePromiseTracker();
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#F8DC1C");
  useEffect(() => {
    trackPromise(
      fetch("https://calm-mesa-41690.herokuapp.com/reviews")
        .then((response) => response.json())
        .then((data) => setClients(data))
    );
  }, []);
  return (
    <section className="mb-5">
      <div
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
        className=""
      >
        <h1>
          <b>
            Clients <span style={{ color: "#7AB259" }}>Feedback</span>
          </b>
        </h1>
      </div>{" "}
      <br />
      <div className="container-fluid mt-5">
        <div className="row">
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
            clients.map((client) => <ClientDetails client={client} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default Client;
