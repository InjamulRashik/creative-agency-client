import React from "react";
import SideBarAdmin from "../../SharedComponent/SideBar/SideBarAdmin";
import AdminMakeDetails from "../AdminMakeDetails/AdminMakeDetails";

const AdminMake = () => {
  return (
    <div className="d-flex" id="wrapper">
      <SideBarAdmin></SideBarAdmin>
      <div className="bg-light" id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-white  border-0">
          <p
            style={{
              fontWeight: "bolder",
              fontSize: "22px",
              color: "#0C0C0C",
              paddingTop: "25px",
            }}
          >
            Make Admin
          </p>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <h6 className="text-success">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-person-circle"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                    <path
                      fill-rule="evenodd"
                      d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                    />
                  </svg>
                  <b className="ml-2">
                    Admin <span class="sr-only">(current)</span>
                  </b>
                </h6>
              </li>
            </ul>
          </div>
        </nav>
        <AdminMakeDetails></AdminMakeDetails>
      </div>
    </div>
  );
};

export default AdminMake;
