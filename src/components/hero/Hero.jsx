import React from "react";
import heroimages from "../../assets/images/hero-min.png";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroimages})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
      className="hero"
    >
      <div className="homeContainer">
        <div className="hero__wrapper">
          <h1>Metropoliten kadrlarini tayyorlash ilmiy innovatsion markazi</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
