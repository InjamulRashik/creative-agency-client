import React from "react";
import { Carousel } from "3d-react-carousal";
import carousel1 from "../../../images/carousel-1.png";
import carousel2 from "../../../images/carousel-2.png";
//import carousel3 from "../../../images/carousel-3.png";
import carousel4 from "../../../images/carousel-4.png";
import carousel5 from "../../../images/carousel-5.png";

const WorkCarousel = () => {
  let slides = [
    <img style={{ width: "50%" }} src={carousel1} alt="1" />,
    <img style={{ width: "50%" }} src={carousel2} alt="2" />,
    //<img style={{ width: "50%", height: "431px" }} src={carousel3} alt="3" />,
    <img style={{ width: "50%" }} src={carousel4} alt="3" />,
    <img style={{ width: "50%" }} src={carousel5} alt="4" />,
  ];
  return (
    <div
      style={{
        background: "#111430",
        textAlign: "center",
        padding: "55px 0 100px 0",
      }}
    >
      <h1 style={{ color: "white" }}>
        <b>
          Here are some of <span style={{ color: "#7AB259" }}>our works</span>
        </b>
      </h1>{" "}
      <br />
      <div>
        <Carousel slides={slides} autoplay={true} interval={5000} />
      </div>
    </div>
  );
};

export default WorkCarousel;
