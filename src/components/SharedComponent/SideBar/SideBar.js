import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../../images/logos/logo.png";
import Order from "../../User/Order/Order";
import Review from "../../User/Review/Review";
import ServiceList from "../../User/ServiceList/ServiceList";
import "./SideBar.css";

const SideBar = () => {
  let history = useHistory();
  return (
    <div className=" border-0" id="sidebar-wrapper">
      <div className="sidebar-heading">
        <img src={logo} style={{ width: "202px", height: "60px" }} alt="" />{" "}
      </div>
      <div className="list-group list-group-flush">
        <p
          onClick={() => {
            history.push("/user/order");
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
              class="bi bi-cart2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
              />
            </svg>
          </span>{" "}
          Order
        </p>
        <p
          style={{
            fontWeight: "normal",
            fontSize: "16px",
          }}
          onClick={() => {
            history.push("/user/servicelist");
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
            history.push("/user/review");
          }}
          className="list-group-item list-group-item-action align-items-center textSelect  "
        >
          <span>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-chat-left-dots"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M14 1H2a1 1 0 0 0-1 1v11.586l2-2A2 2 0 0 1 4.414 11H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </span>{" "}
          Review
        </p>
      </div>
    </div>
  );
};

export default SideBar;
