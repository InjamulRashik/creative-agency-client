import React from "react";
import client1 from "../../../images/customer-1.png";
import client2 from "../../../images/customer-2.png";
import client3 from "../../../images/customer-3.png";
import ClientDetails from "../ClientDetails/ClientDetails";

const Client = () => {
  const clients = [
    {
      img: client1,
      name: "Nash Patrik",
      designation: "CEO, Manpol",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    },
    {
      img: client2,
      name: "Miriam Barron",
      designation: "CEO, Manpol",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    },
    {
      img: client3,
      name: "Bria Malone",
      designation: "CEO, Manpol",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    },
  ];
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
