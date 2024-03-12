import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.jpeg";
import user_3 from "../../assets/user-3.jpg";
import user_4 from "../../assets/user-4.jpg";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Akshit Gupta</h3>
                  <span>Gurgaon, India</span>
                </div>
              </div>
              <p>
                My experience with Nourish has been truly impactful. The
                simplicity of the app allowed me to contribute to feeding those
                in need with just a few taps on my phone. Knowing that my
                donation directly helps children and families worldwide gives me
                a sense of fulfillment and purpose.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Harsh Pruthi</h3>
                  <span>Delhi, India</span>
                </div>
              </div>
              <p>
                Using Nourish has been a game-changer for me in donating excess
                food. The app's ease of use and ability to connect me with
                nearby nonprofits efficiently made the process seamless. I
                appreciate how Nourish emphasizes reducing food waste and
                supporting communities in need
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Aman Pandey</h3>
                  <span>Uttar Pradesh, India</span>
                </div>
              </div>
              <p>
                Reading about food wastage reduction through donations on
                Nourish has inspired me to consider how technology can address
                critical issues like hunger. The review shed light on innovative
                approaches to tackling food waste and promoting sustainability,
                sparking my interest in contributing to such causes
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Ankur Saini</h3>
                  <span>Mumbai, India</span>
                </div>
              </div>
              <p>
                Learning about food waste reduction through donations on Nourish
                has motivated me to explore how technology can combat critical
                issues like hunger. The insights shared shed light on innovative
                strategies for addressing food waste and promoting
                sustainability, sparking my interest in contributing to such
                impactful causes.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
