import React, { useEffect, useState } from "react";
import ClientDetails from "../ClientDetails/ClientDetails";

const Client = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    fetch("https://calm-mesa-41690.herokuapp.com/reviews")
      .then((response) => response.json())
      .then((data) => setClients(data));
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
          {clients.map((client) => (
            <ClientDetails client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;
