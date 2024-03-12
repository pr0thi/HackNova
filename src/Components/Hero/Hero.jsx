import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import white_arrow from "../../assets/white-arrow.png";
import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Where Every Meal Matters</h1>
        <p>
          Empower change with every meal - share hope through food donations.
        </p>
        <button className="btn food-donor">
          <Link to="/donar">
            Contribute as food donor <img src={white_arrow} alt="" />
          </Link>
        </button>
        <p> </p>
        <button className="btn">
          <Link to="/foodbank">
            Find nearest food donors <img src={dark_arrow} alt="" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
