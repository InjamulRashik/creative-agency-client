import React from "react";
import Brands from "../Brands/Brands";
import Client from "../Client/Client";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Service from "../Service/Service";
import WorkCarousel from "../WorkCarousel/WorkCarousel";

const Home = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Brands></Brands>
      <Service></Service>
      <WorkCarousel></WorkCarousel>
      <Client></Client>
      <Contact></Contact>
    </React.Fragment>
  );
};

export default Home;
