import logo from './logo.svg';
import './App.css';
import React from 'react';

//In react components are simply re-usable JSX
//1. A component is basically a function
//2. The first letter is UpperCase (to denote is a component)
//3. Must always return a JSX with a root element

//To use a component, we write it out as if it's a HTML element
//root element <img /> -> self closing
function ImageFrame(){
  return <img src={require ("./mongo.png")} />
}

//component with inline style
//loading svg needs the svg tag
function BorderedImageFrame(){
  return <img src={require("./mongo.png")} style={{ border: "2px solid red" }} />
}

//Welcome component | Heading component
function Welcome(){
  return <h1>Hello!</h1>;
}

function TwoBoxes(){
  //JSX must have only one root (e.g top level element)
  return (
    <React.Fragment>
      <div style={{ display: "inline-style", backgroundColor: "red"}}>Red</div>
      <div style={{ display: "inline-style", backgroundColor: "green"}}>Green</div>
    </React.Fragment>
  );
}

function App() {
  return (
    <React.Fragment>
      <TwoBoxes />
      <BorderedImageFrame/>
      <ImageFrame/>
    </React.Fragment>
  );
}

export default App;
