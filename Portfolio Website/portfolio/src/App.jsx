// import React from "react";
// import CustomCard from "./components/CustomCard";
import "./App.css";
import { Navbar, Cards } from "./components/index.js";
import {
  Header,
  Skills,
  Footer,
  MyProject,
  PetProject,
} from "./containers/index.js";
// import { Header } from "./containers/";
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
    </div>
  );
};

export default App;
