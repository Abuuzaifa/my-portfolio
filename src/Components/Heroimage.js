import "./Heroimage.css";
import React from "react";
import IntroImg from "../Images/IntroImg.jpg";
import { Link } from "react-router-dom";

const Heroimage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImage" />
      </div>
      <div className="content">
        <h1>Hello, I'm Abu Uzaifa</h1>
        <p>Full Stack Developer.</p>
        <div>
          <Link to="/Contact" className="btn">
            Contact
          </Link>
          <Link
            to={
              "https://drive.google.com/file/d/1xD-o7EgO55OXJmAZfLUSPSOaEvznG3Ud/view?usp=drive_link"
            }
            className="btn-light"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimage;
