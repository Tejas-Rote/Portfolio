// import React from "react";
// import CustomCard from "./components/CustomCard";
import "./App.css";
import { Navbar, Cards, Gallery } from "./components/index.js";
import {
  Header,
  Skills,
  Footer,
  MyProject,
  PetProject,
} from "./containers/index.js";

const App = () => {
  return (
    <div className="app">
      <div className="bg">
        <Navbar />
        <Header />
        <Skills />
        <MyProject />
        <Footer />
      </div>
      {/* <PetProject /> */}
      {/* <Gallery /> */}
    </div>
  );
};

export default App;
