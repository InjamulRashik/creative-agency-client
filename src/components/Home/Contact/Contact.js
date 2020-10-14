import React from "react";

const Contact = () => {
  return (
    <section
      style={{
        background: "#FBD062",
        paddingTop: " 62px",
        paddingBottom: "40px",
      }}
    >
      <div
        style={{ marginBottom: "120px" }}
        className="row d-flex justify-content-between"
      >
        <div style={{ paddingLeft: " 180px" }} className="col-md-6">
          <h1>
            <b>
              Let us handle your <br /> project, professionally.
            </b>
          </h1>{" "}
          <br />
          <p className="text-secondary">
            With well written codes, we build amazing apps for all <br />{" "}
            platforms, mobile and web apps in general.
          </p>
        </div>
        <div style={{ paddingLeft: " 180px" }} className="col-md-6 ">
          <input
            style={{
              width: "385px",
              marginBottom: "16px",
              border: "none",
              borderRadius: "5px",
              height: "70px",
              paddingLeft: "30px",
            }}
            type="text"
            name=""
            id=""
            placeholder="Your email address"
          />{" "}
          <br />
          <input
            style={{
              width: "385px",
              marginBottom: "16px",
              border: "none",
              borderRadius: "5px",
              height: "70px",
              paddingLeft: "30px",
            }}
            type="text"
            name=""
            id=""
            placeholder="Your name / company’s name"
          />{" "}
          <br />
          <input
            style={{
              width: "385px",
              paddingBottom: "277px",
              marginBottom: "16px",
              border: "none",
              borderRadius: "5px",
              paddingLeft: "30px",
              paddingTop: "30px",
            }}
            type="text"
            name=""
            id=""
            placeholder="Your message"
          />{" "}
          <br />
          <button style={{ width: "170px" }} className="btn btn-dark">
            Send
          </button>
        </div>
      </div>
      <footer className="text-secondary" style={{ textAlign: "center" }}>
        copyright Orange labs 2020
      </footer>
    </section>
  );
};

export default Contact;
