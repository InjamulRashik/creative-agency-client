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
    <section>
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
            padding: "0px 100px 0 150px",
            marginTop: "77px",
            marginBottom: "114px",
          }}
          className="row"
        >
          {clients.map((client) => (
            <ClientDetails client={client}></ClientDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;
