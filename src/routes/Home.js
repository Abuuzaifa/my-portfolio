import React from "react";
import Navbar from "../Components/Navbar";
import Heroimage from "../Components/Heroimage";
import Footer from "../Components/Footer";
import Work from "../Components/Work";
import AboutContent from "../Components/AboutContent";
import SkillsContent from "../Components/SkillsContent";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimage />
      <AboutContent />
      <Work />
      <SkillsContent />
      <Footer />
    </div>
  );
};

export default Home;
