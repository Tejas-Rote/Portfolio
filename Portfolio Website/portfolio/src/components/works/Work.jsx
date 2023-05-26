// import React from 'react'
import "./work.css";
import redirect from "../../assets/redirect.png";
import github from "../../assets/github.png";

const Work = (props) => {
  // const { flexStyle } = props;
  // console.log(props.link1);

  // const containerClasses = classNames('flex-container', {
  //   'projectCard': flexStyle === 'row',
  //   'projectCardR': flexStyle === 'rowr',
  //   // Add more class names for other flex styles as needed
  // });

  return (
    <div className="work">
      <div className={props.flexStyle}>
        <div className="left">
          <img src={props.imgsrc} alt="image" />
        </div>
        <div className="right">
          <div className="heading">
            <h2>{props.name}</h2>
          </div>
          <div className="techStack">
            <div className="lang">MERN stack </div>
          </div>
          <div className="hr" />
          <div className="info">
            <p>{props.info}</p>
          </div>
          <div className="links">
            <div className="code">
              <div className="code-text">
                <a href={props.code}>Code</a>
              </div>
              <div className="code-logo">
                <img src={github} alt="github" />
              </div>
            </div>
            <div className="live">
              <div className="live-text">
                <a href={props.live}>live</a>
              </div>
              <div className="live-logo">
                <img src={redirect} alt="redirect" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
