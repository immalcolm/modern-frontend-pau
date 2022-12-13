import React from "react";
import RegisterFormFunc from "./RegisterFormFunc";
import Summary from "./Summary";
//1. upgrade app.js into a class
//2. place in states, function/logic
//3. place in managed components
//4. import in RegisterFormFunc and implement in Render

class App extends React.Component {
  //state is going to hold temp values
  //states are private data tied to the class itself
  //only the component holds the state values
  state = {
    fullName: "",
    email: "",
    isButtonClicked: false,
  };

  updateFormFields = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //set the conditional to render(isButtonClicked) summary to true
  registerButtonPressed = () => {
    console.log(`Click on register`);
    this.setState({
      isButtonClicked: true,
    });
  };

  //to use props give an attribute key
  //props.<key/attribute>
  render() {
    return (
      <React.Fragment>
        <RegisterFormFunc
          fullName={this.state.fullName}
          email={this.state.email}
          update={this.updateFormFields}
          register={this.registerButtonPressed}
        />

        {this.state.isButtonClicked ? (
          <Summary fullName={this.state.fullName} email={this.state.email} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
