import React from "react";
import HeaderContent from "../HeaderContent/HeaderContent";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-content">
      <NavBar></NavBar>
      <HeaderContent></HeaderContent>
    </div>
  );
};

export default Header;
