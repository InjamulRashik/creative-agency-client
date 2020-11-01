import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <React.Fragment>
      <section style={{ background: "#FBD062" }}>
        <div className="container" style={{ background: "#FBD062" }}>
          <div
            className="d-flex justify-content-around
        row pt-5"
          >
            <div className="col-md-4 offset-md-1 pl-4">
              <h1>
                <b>
                  Let us handle your <br /> project, professionally.
                </b>
              </h1>{" "}
              <br />
              <p className="text-secondary">
                With well written codes, we build amazing apps for all
                platforms, mobile and web apps in general.
              </p>
            </div>
            <div className="col-md-6 pl-4 pr-4">
              <form>
                <input
                  style={{ height: "70px" }}
                  className="input-contact  form-control"
                  type="text"
                  placeholder="Your email address"
                />{" "}
                <br />
                <input
                  style={{ height: "70px" }}
                  className="input-contact form-control"
                  type="text"
                  placeholder="Your name / company’s name"
                />{" "}
                <br />
                <textarea
                  style={{ height: "277px" }}
                  className="input-contact form-control pb-5"
                  type="text"
                  placeholder="Your message"
                />{" "}
                <br />
                <button
                  className="btn btn-dark"
                  style={{ width: " 170px", height: "45px" }}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
          <footer
            style={{ paddingTop: "120px" }}
            className="text-center text-secondary"
          >
            copyright Orange labs 2020
          </footer>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
