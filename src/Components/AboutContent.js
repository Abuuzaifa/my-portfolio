import "./AboutContent.css";
import React from "react";
import rightimg1 from "../Images/rightimg1.jpg";
import rightimg2 from "../Images/rightimg2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I’m Abu Uzaifa, an aspiring Full Stack Developer with a recent MCA
          degree and a passion for turning ideas into useful web applications.
          With a solid grasp of both front-end and back-end technologies, I
          enjoy creating solutions that are efficient, user-friendly and
          adaptable. I’m always eager to learn new things, take on challenges,
          and grow my skills. I’m looking forward to being part of a team where
          I can contribute, collaborate on exciting projects and continue
          developing as a developer. Eager to join a forward-thinking team, I
          aim to contribute fresh perspectives, collaborate on exciting
          projects, and grow in an environment where creativity meets
          technology.
        </p>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={rightimg2} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={rightimg1} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
