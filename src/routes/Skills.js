import React from "react";
import Navbar from "../Components/Navbar";
import HeroPro from "../Components/HeroPro";
import Footer from "../Components/Footer";
import SkillsContent from "../Components/SkillsContent";

const Skills = () => {
  return (
    <div>
      <Navbar />
      <HeroPro
        heading="SKILLS"
        text="Passionate about learning, coding and creating real-world solutions."
      />
      <SkillsContent />
      <Footer />
    </div>
  );
};

export default Skills;
