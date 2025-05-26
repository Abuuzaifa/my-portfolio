import "./Footer.css";
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <h1>Contact Me</h1>
          <p>Feel free to reach out to me.</p>
          <h4>📞 +91 8296940207</h4>
        </div>
        <div className="right">
          <div className="icons">
            <FaEnvelope
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <Link to={"abuzaifa18@gmail.com"}>
                <h4>abuzaifa18@gmail.com </h4>
              </Link>
            </div>
          </div>
          <div className="icons">
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <Link to={"https://www.linkedin.com/in/abu-uzaifa18"}>
                <h4>https://www.linkedin.com/in/abu-uzaifa18</h4>
              </Link>
            </div>
          </div>
          <div className="icons">
            <FaGithub
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <Link to={"https://github.com/Abuuzaifa"}>
                <h4>https://github.com/Abuuzaifa</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
