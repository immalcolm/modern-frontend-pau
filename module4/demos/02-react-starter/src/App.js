//App is actually a component in React
//In react, a function that returns JSX is a component
//those stuff that looks HTML is JSX

//Take note that each a save is made, the browser will automatically refresh
//[Rules of JSX]
//in React we use the keyword import (ES6). In Node, we use require instead
//1. Must return only one main root element. cannot have multiple root elements.
// . Ensure all under one same parent
//2. React.Fragment to act as a root. import React from 'react'
// won't see the React Fragment when generated. The HTML code will be neater
//JSX must have one top level element else it will complain
import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "./style.css"; //import and use our own css file

// simple custom component
function TwoBoxes(){
  return (
  <React.Fragment>
    <div>Box 1</div>
    <div>Box 2</div>
  </React.Fragment>);
}

//JSX -> use single brace {..} -> JS Expression
//JSX {100* 10} -> evalutes to a value
//!! we can't use if else if(firstName === abc)--> can't use
//use tenary operator instead --> allows evaluation

//inline styles --> relies on double braces {{}}
//{{}} -> first brace/outer brace -> react expression
//{{..}} --> second /inner brace -> tells it's an object
//example {{backgroundColor: "green"}} --> take note CSS inline styles are in JavaScript

//dealing with images {require("./<filename>")}
//ensure images are in the src folder
function App() {
  let msg = "Monday Blues";
  let firstName = "";
  return (
    <div>
      <h1 className="heading">{msg}</h1>
      <h2 style={{ backgroundColor: "green" }}>Heading {100 * 10}</h2>
      <p>{firstName == "John" ? "Welcome" : "Not Welcome!"}</p>
      <img src={require("./module4-schedule.png")} />
      <TwoBoxes/>
    </div>
  );
}

export default App;
