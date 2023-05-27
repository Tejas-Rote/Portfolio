// import React from 'react'
import { Cards } from "../../components/index.js";
import html from "../../assets/html.png";
import javaS from "../../assets/javaS.png";
import git from "../../assets/git.png";
import css3 from "../../assets/css3.png";
import arduino from "../../assets/arduinoSmall.png";
import mongodb from "../../assets/mongodb.png";

import "./skills.css";
const Skills = () => {
  // const html = "../../assets/html.png";

  return (
    <div className="skills" id="skills">
      <div className="skills__content">
        <div className="skills__content-title">
          <h1>My Skills</h1>
        </div>
        <div className="skills__content-tech">
          <div className=" skills__content-tech__card ">
            <div className="row">
              <Cards imgsrc={html} title="HTML" />
              <Cards imgsrc={javaS} title="JavaScript" />
              <Cards imgsrc={css3} title="CSS3" />
            </div>
            <div className="row">
              <Cards imgsrc={git} title="Git" />
              <Cards imgsrc={arduino} title="Arduino" />
              <Cards imgsrc={mongodb} title="MongoDB" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
