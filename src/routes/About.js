import React from "react";
import Navbar from "../Components/Navbar";
import HeroPro from "../Components/HeroPro";
import AboutContent from "../Components/AboutContent";
import Footer from "../Components/Footer";
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroPro heading="ABOUT" text="Self-motivated learner." />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
