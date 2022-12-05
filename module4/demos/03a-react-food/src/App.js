import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "./style.css";
import Nav from "./Nav";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";

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
