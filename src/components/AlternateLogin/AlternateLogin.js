import React from "react";
import { useHistory } from "react-router-dom";
import "./AlternateLogin.css";
import logo from "../../logo.png";

const AlternateLogin = () => {
  let history = useHistory();
  return (
    <div
      style={{ textAlign: "center", marginTop: "10px" }}
      className="container"
    >
      <img src={logo} alt="" />
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 altLogin btn btn-outline-info ml-2  mr-2">
          <p
            onClick={() => {
              history.push("/user/order");
            }}
          >
            Login as User
          </p>
        </div>{" "}
        <div className="col-md-6 btn btn-outline-success ml-2  mr-2 altLogin">
          <p onClick={() => history.push("/admin/servicelist")}>
            Login as Admin
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlternateLogin;
