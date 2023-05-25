// import React from "react";
// import CustomCard from "./components/CustomCard";
import "./App.css";
import { Navbar } from "./components/index.js";
import { Header } from "./containers/index.js";
// import { Header } from "./containers/";
const App = () => {
  return (
    <div className="app">
      {/* <CustomCard /> */}
      {/* hello */}
      <div className="bg">
        <Navbar />
        {/* <Header /> */}
      </div>
    </div>
  );
};

export default App;
