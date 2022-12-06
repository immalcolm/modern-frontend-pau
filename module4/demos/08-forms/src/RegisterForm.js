//Registration Form

import React from "react";

//form needs state data, going to implement 2 way binding
//what the user types will be reflected
//form needs to gather a few entries
//- fullname
//- country
//- most interested product
//- email
class RegisterForm extends React.Component {
  //what defines the state
  //state is a special name and you can't rename it
  //must be named as "state"
  //setup some defaults to be used
  state = {
    fullname: "",
    country: "",
    product: "",
    email: "",
  };
  //functions that handle events -------------------
  //the event is fixed, and is always the first param there will be passed in
  //the event object will contain details of the event
  //e.g position of mouse, keyboard etc.
  //what we are aiming is the [target]
  updateFullName = (event) => {
    console.log("change is happening");
    //console.log(event);
    //setup our 2way binding
    //what happens what the state changes?
    //it will re-render
    this.setState({
      fullname: event.target.value,
    });
  };

  updateEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  updateProduct = (event) => {
    this.setState({
        product: event.target.value
    })
  }

  //end functions that handle events ----------------

  //the render() method (e.g inside a class)
  //used to return JSX
  //don't forget to put in return!! else the UI (JSX) won't appear
  //because we are making form elements.
  //in react there's no need to assign ids
  //document.getElementById ->>> doesn't work
  render() {
    return (
      <React.Fragment>
        {/* setup 1-way binding first  */}
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            value={this.state.fullname}
            onChange={this.updateFullName}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.updateEmail}
          />
        </div>
        <div>
          <label>Product:</label>
          <input
            type="radio"
            name="product"
            value="electronics"
            checked={this.state.product == "electronics"}
            onChange={this.updateProduct}
          />
          <label>Electronics</label>
          <input
            type="radio"
            name="product"
            value="shoes"
            checked={this.state.product == "shoes"}
            onChange={this.updateProduct}
          />
          <label>Shoes</label>
          <input
            type="radio"
            name="product"
            value="grocery"
            checked={this.state.product == "grocery"}
            onChange={this.updateProduct}
          />
          <label>Grocery</label>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
