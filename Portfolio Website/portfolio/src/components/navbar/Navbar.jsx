// import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";

import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nav">
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links">
          {/* <div className="navbar-links_container"> */}
          <p>
            <a href="#aboutme">About Me</a>
          </p>
          <p>
            <a href="#skills">Skills</a>
          </p>
          <p>
            <a href="#projects">Projects</a>
          </p>
          <p>
            <a href="#contacts">Contacts</a>
          </p>
          {/* </div> */}
        </div>
        {/* <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div> */}
        <div className="navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="navbar-menu_container scale-up-center">
              <div className="navbar-menu_container-links">
                <p>
                  <a href="#aboutme">About Me</a>
                </p>
                <p>
                  <a href="#skills">Skills</a>
                </p>
                <p>
                  <a href="#projects">Projects</a>
                </p>
                <p>
                  <a href="#contacts">Contacts</a>
                </p>
              </div>
              {/* <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
