// import React from "react";
import "./petProject.css";
import { Cards } from "../../components/index.js";
import nft from "./images/NFT_Preview.jpg";
const petProject = () => {
  return (
    <div className="pet">
      <Cards imgsrc={nft} title="HTML" />
    </div>
  );
};

export default petProject;
