import React from "react";
import AskForNumber from "./AskForNumber";
import Answer from "./Answer";

//1. change this to a class
//2. pull in states / logic from AskForNumber.js
//3. create render function also

export default class App extends React.Component {
  state = {
    number1: 0,
    number2: 0,
    total: 0,
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addNumber = () => {
    this.setState({
      total: parseFloat(this.state.number1) + parseFloat(this.state.number2),
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <AskForNumber 
            number1={this.state.number1}
            number2={this.state.number2}
            update={this.updateFormField}
            add={this.addNumber}
          />
        </div>
        <Answer result={this.state.total}/>
      </div>
    );
  }
}
