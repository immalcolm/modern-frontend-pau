import React from "react";

export default class AskForNumber extends React.Component {
  state = {
    number1: 0,
    number2: 0,
    total: 0
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNumber = () => {
    this.setState({
      total: parseFloat(this.state.number1) + parseFloat(this.state.number2)
    });
  };

  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          name="number1"
          value={this.state.number1}
          onChange={this.updateFormField}
        />
        <input
          type="text"
          name="number2"
          value={this.state.number2}
          onChange={this.updateFormField}
        />
        <button onClick={this.add}>Add</button>
      </React.Fragment>
    );
  }
}
