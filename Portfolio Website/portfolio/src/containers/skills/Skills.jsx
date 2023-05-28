// import React from 'react'
import { Cards } from "../../components/index.js";
import html from "../../assets/html.png";
import javaS from "../../assets/javaS.png";
import git from "../../assets/git.png";
import css3 from "../../assets/css3.png";
import arduino from "../../assets/arduinoSmall.png";
import mongodb from "../../assets/mongodb.png";
import java from "../../assets/java.png";
import cplusplus from "../../assets/cplusplus.png";
import react from "../../assets/react.png";
import python from "../../assets/python.png";

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
              <Cards imgsrc={react} title="ReactJS" />
              <Cards imgsrc={python} title="Python" />

              {/* </div> */}
              {/* <div className="row"> */}
              <Cards imgsrc={git} title="Git" />
              <Cards imgsrc={arduino} title="Arduino" />
              <Cards imgsrc={mongodb} title="MongoDB" />
              <Cards imgsrc={java} title="Java" />
              <Cards imgsrc={cplusplus} title="C++" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
