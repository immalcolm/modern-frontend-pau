import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "./style.css";
import Nav from "./Nav";
import Hero from "./Hero";
import AboutUs from "./AboutUs";

//using components in separate files 
function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <AboutUs />
    </React.Fragment>
  );
}

export default App;
