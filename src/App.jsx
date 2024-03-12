import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const App = () => {
  const [playState, setPlayState] = useState(false);
    return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Vision" title="Our Goals" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Donation Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What People Say" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />

    </div>
  );
};

export default App;
