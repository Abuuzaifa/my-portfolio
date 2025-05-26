import "./WorkCard.css";

import React from "react";
import { NavLink } from "react-router-dom";
const WorkCard = (props) => {
  return (
    <div className="ptoject-card">
      <img src={props.imgsrc} alt="" />
      <h2 className="project-tittle">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.github} className="btn">
            Git Hub
          </NavLink>
          <NavLink to={props.livedemo} className="btn">
            Live Demo
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
