// import React from 'react'
import "./header.css";
import photo from "../../assets/photo.png";
import icon from "../../assets/icon.png";
// import tejas from "../../assets/photo.svg";
import Tejas from "../../assets/Tejas_Photo.jpg";
import b1 from "../../assets/blobanimation.svg";
import b2 from "../../assets/blobanimation2.svg";
import blob from "../../assets/blobanimation.svg";
const Header = () => {
  return (
    <div className="header" id="aboutme">
      <div className="header__content-top">
        <div className="header__content-left">
          <div className="header__info">
            <div className="header__info-title">
              <h1>Tejas Rote </h1>
            </div>
            <div className="header__info-subtitle">
              <h2>Frontend Developer</h2>
            </div>
            <div className="header__info-text">
              <p>
                Frontent developer looking for ideads and projects and others
              </p>
            </div>
          </div>
        </div>
        <div className="header__content-right">
          <div className="header__image">
            <div className="parent"></div>
              {/* <img src={photo} alt="photo" /> */}
            <div id="blob">
              {/* tejas */}
              <div className="mask1 b1">
              <img src={Tejas} width="400" height="400" />
            </div>
            <img src={b2} alt="blob" className="b1" />
            </div>
          </div>
        </div>
      </div>
      <div className="header__content-bottom">
        <div className="header__content-bottom-info">
          <div className="header__content-bottom-icon">
            <img src={icon} alt="icon" />
          </div>
          <div className="header__content-bottom-text">
            <p>
              A few years ago, I became interested in developing websites and
              interfaces. Since then, I have been steadily improving my skills.
              Now I am developing websites and web applications to order or for
              myself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
