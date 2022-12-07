import React from "react";
export default class ContactForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    enquiry: "",
    btnBeenPressed: false,
  };

  //anywhere can have JSX
  //like this random function
  test() {
    return <div>hi</div>;
  }

  updateFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  updateLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  updateEnquiry = (event) => {
    this.setState({
      enquiry: event.target.value,
    });
  };

  //once user submitted form set pressed status to true
  //summary of details will be show in rendersummary
  submit = () => {
    console.log("submitted");
    //alert with template literal
    //alert(`FirstName: ${this.state.firstName}, LastName: ${this.state.lastName}`);
    this.setState({
      btnBeenPressed: true,
    });
  };

  //conditional rendering to check if there's any values in our form
  checkIfDisabled() {
    //! meaning there's nothing
    return !(this.state.firstName && this.state.lastName && this.state.enquiry);
  }

  //only return JSX when button has been pressed
  //displays summary of info that user keyed in
  renderSummary() {
    if (this.state.btnBeenPressed) {
      return (
        <React.Fragment>
          <h2>Summary of Details</h2>
          <ul>
            <li>First name: {this.state.firstName}</li>
            <li>Last name: {this.state.lastName}</li>
            <li>Enquiry: {this.state.enquiry}</li>
          </ul>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }

  //render always has a return
  //returns JSX elements
  //JSX looks like HTML
  //render is called everytime a state change
  //render is called twice in debug/dev mode
  //[Thought Process]
  //1. setup form + 1 way binding
  //2. setup functions for each input
  //3. radio buttons remember to modify the checked attribute.
  //  - leave value to the value of the radio btn same as html
  //4. test form
  //5. setup 2 way binding
  //6. setup submit button
  //7. setup disabled for submit
  //8. setup render summary in render first
  //9. create function for render summary to check btn been pressed
  //Check and test often before large chunks of code

  //firstName: "",
  //lastName: "",
  //enquiry: "",
  //btnBeenPressed: ""
  render() {
    return (
      <React.Fragment>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.updateFirstName}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.updateLastName}
          />
        </div>
        <div>
          <label>Enquiry:</label>
          <input
            type="radio"
            value="sales"
            name="enquiry"
            checked={this.state.enquiry === "sales"}
            onChange={this.updateEnquiry}
          />
          <label>Sales</label>
          <input
            type="radio"
            value="marketing"
            name="enquiry"
            checked={this.state.enquiry === "marketing"}
            onChange={this.updateEnquiry}
          />
          <label>Marketing</label>
          <input
            type="radio"
            value="socialmedia"
            name="enquiry"
            checked={this.state.enquiry === "socialmedia"}
            onChange={this.updateEnquiry}
          />
          <label>Social Media</label>
        </div>
        <div>
          <button onClick={this.submit} disabled={this.checkIfDisabled()}>
            Send!!{" "}
          </button>
        </div>
        {this.renderSummary()}
      </React.Fragment>
    );
  }
}
