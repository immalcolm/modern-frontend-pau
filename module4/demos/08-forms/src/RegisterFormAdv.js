//Registration Form
//READ:: //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
import React from "react";

//form needs state data, going to implement 2 way binding
//what the user types will be reflected
//form needs to gather a few entries
//- fullname
//- country
//- most interested product
//- email
class RegisterFormAdv extends React.Component {
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

  //bind all form elements together
  //HOW?
  //form names need to be setup and be in-sync with the state keys
  //we can change the onChange handler to the updateFormField
  //!!! state keys must match our form input names 
  updateFormField = (event) => {
    //let's see what happens under the hood 

    //event.target.name will gives the "name" of the <input> element
    console.log("event.target.name: ", event.target.name);
    //event.target.value will gives us the value of the <input> element
    console.log("event.target.value: ", event.target.value);
    
    //we tap onto the [] the means the key will be inside the variable 
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  //the event is fixed, and is always the first param there will be passed in
  //the event object will contain details of the event
  //e.g position of mouse, keyboard etc.
  //what we are aiming is the [target]
  /*
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
  */

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
            name="fullname"
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Product:</label>
          <input
            type="radio"
            name="product"
            value="electronics"
            checked={this.state.product == "electronics"}
            onChange={this.updateFormField}
          />
          <label>Electronics</label>
          <input
            type="radio"
            name="product"
            value="shoes"
            checked={this.state.product == "shoes"}
            onChange={this.updateFormField}
          />
          <label>Shoes</label>
          <input
            type="radio"
            name="product"
            value="grocery"
            checked={this.state.product == "grocery"}
            onChange={this.updateFormField}
          />
          <label>Grocery</label>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterFormAdv;
