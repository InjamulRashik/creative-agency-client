import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../../images/logos/logo.png";
import "./SideBar.css";

const SideBarAdmin = () => {
  let history = useHistory();
  return (
    <div className=" border-0" id="sidebar-wrapper">
      <div className="sidebar-heading">
        <img src={logo} style={{ width: "202px", height: "60px" }} alt="" />{" "}
      </div>
      <div className="list-group list-group-flush">
        <p
          onClick={() => {
            history.push("/admin/servicelist");
          }}
          style={{
            fontWeight: "normal",
            fontSize: "16px",
          }}
          className="list-group-item list-group-item-action align-items-center textSelect  "
        >
          <span>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-hdd"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M14 9H2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zM2 8a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2z"
              />
              <path d="M5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
              <path
                fill-rule="evenodd"
                d="M4.094 4a.5.5 0 0 0-.44.26l-2.47 4.532A1.5 1.5 0 0 0 1 9.51v.99H0v-.99c0-.418.105-.83.305-1.197l2.472-4.531A1.5 1.5 0 0 1 4.094 3h7.812a1.5 1.5 0 0 1 1.317.782l2.472 4.53c.2.368.305.78.305 1.198v.99h-1v-.99a1.5 1.5 0 0 0-.183-.718L12.345 4.26a.5.5 0 0 0-.439-.26H4.094z"
              />
            </svg>
          </span>{" "}
          Service List
        </p>
        <p
          style={{
            fontWeight: "normal",
            fontSize: "16px",
          }}
          onClick={() => {
            history.push("/admin/addservice");
          }}
          className="list-group-item list-group-item-action align-items-center textSelect  "
        >
          <span>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-plus-circle"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                fill-rule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
          </span>{" "}
          Add Service
        </p>
        <p
          style={{
            fontWeight: "normal",
            fontSize: "16px",
          }}
          onClick={() => {
            history.push("/admin/makeadmin");
          }}
          className="list-group-item list-group-item-action align-items-center textSelect  "
        >
          <span>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-person-plus"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10zM13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
          </span>{" "}
          Make admin
        </p>
      </div>
    </div>
  );
};

export default SideBarAdmin;
