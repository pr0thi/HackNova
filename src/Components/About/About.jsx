import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h4>ABOUT US</h4>
        <h2>Where Every Meal Counts</h2>
        {/* <Title subTitle="About Us" title="Where Every Meal Counts" /> */}
        <p>
          Our website is a dedicated platform designed to facilitate the
          seamless donation of surplus food to individuals and organizations in
          need.
        </p>
        <p>
          Through our user-friendly interface, donors can easily list available
          food donations, connect with local recipients, and contribute to
          reducing food waste while addressing food insecurity.
        </p>
        <p>
          We prioritize community support by fostering meaningful connections
          and promoting sustainable practices, empowering users to make a
          tangible impact through their giving.
        </p>
      </div>
    </div>
  );
};

export default About;
