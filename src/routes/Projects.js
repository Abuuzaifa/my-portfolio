import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroPro from "../Components/HeroPro";
import Work from "../Components/Work";
const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroPro heading="PROJECTS" text="Creating projects and learning every day." />
      <Work />
      <Footer />
    </div>
  );
};

export default Projects;
