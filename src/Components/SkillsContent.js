import "./SkillsContent.css";

import React from "react";

const SkillsContent = () => {
  return (
    <div className="skills">
      <h1 className="headings">SKILLS</h1>
      <div className="skills-container">
        <div className="left">
          <h1>FRONT-END SKILLS</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="right">
          <h1>BACK-END SKILLS</h1>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>MySQL</li>
            <li>C Programming</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;
