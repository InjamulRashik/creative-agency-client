import React from "react";
import HeaderContent from "../HeaderContent/HeaderContent";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
  return (
    <div style={{ height: "950px", width: "auto" }} className="header-content">
      <NavBar></NavBar>
      <HeaderContent></HeaderContent>
    </div>
  );
};

export default Header;
