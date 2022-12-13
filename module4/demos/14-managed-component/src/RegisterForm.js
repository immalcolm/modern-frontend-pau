import React from "react";

//1. start with a simple display
//2. test the form UI
//3. setup form values with 1 way binding and test
//4. setup form with 2 way bind using updateFormFields = (event) => {}
// . onChange={this.updateFormFields }
//5. Create a register button with onClick with register function
// . register = () => {} ... is to handle our onClick
//6. Create a simple renderSummary function and display some JSX content

export default class RegisterForm extends React.Component {
  //state is going to hold temp values
  //states are private data tied to the class itself
  //only the component holds the state values
  state = {
    fullName: "",
    email: "",
    isButtonClicked: false
  };

  updateFormFields = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //set the conditional to render(isButtonClicked) summary to true 
  register = () => {
    console.log(`Click on register`);
    this.setState({
      isButtonClicked: true,
    });
  };

  //conditional rendering 
  //renders the summary only when user clicks on Register button
  renderSummary() {
    if (this.state.isButtonClicked) {
      return (
        <React.Fragment>
          <h1>Summary</h1>
          <ul>
            <li>{this.state.fullName}</li>
            <li>{this.state.email}</li>
          </ul>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={this.state.fullName}
            name="fullName"
            onChange={this.updateFormFields}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.updateFormFields}
          />
        </div>
        <button onClick={this.register}>Register</button>

        {this.renderSummary()}
      </React.Fragment>
    );
  }
}
