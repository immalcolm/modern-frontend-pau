//Registration Form
//READ:: //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
//READ:: https://replit.com/@immalcolm/arrays-spread-operator-without-mutation
//Using spread operators
import React from "react";

//form needs state data, going to implement 2 way binding
//what the user types will be reflected
//form needs to gather a few entries
//- fullname
//- country
//- most interested product
//- email
class RegisterFormAdvChk extends React.Component {
  //what defines the state
  //state is a special name and you can't rename it
  //must be named as "state"
  //setup some defaults to be used

  //what date types to use for checkboxes?
  //we are going to use an array. remember our module3 dealing with chkboxes in express
  state = {
    fullname: "",
    country: "",
    product: "",
    email: "",
    interests: [],
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
    //[]-> produces the end-result/value of the item inside
    //e.g. [event.target.name] -->end result of event.target.name -> which is the name of the form element
    //hence it becomes -> form element name: form element value
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //deal with checkboxes
  //React deals with functional programming
  //Doesn't like us to easily change the value or reassign
  updateInterests = (event) => {
    console.log(`target value: ${event.target.value}`);

    if (this.state.interests.includes(event.target.value) === false) {
      //Method 1
      //1. Clone the array
      let cloned = this.state.interests.slice();

      //2. change the cloned array
      //still not fantastic because we are using push. Not true reactive programming
      cloned.push(event.target.value);

      //3. swap out the original array with clone
      this.setState({
        interests: cloned,
      });
    } else {
      //if the checkbox value is already in the arrray, it means it has been checked
      // so we have to remove the existing one
      console.log("removing..... ", event.target.value);

      //process repeat -> clone -> change -> swap

      //remove an item in the checkbox array
      //1. clone the array
      //in order to remove the item
      //copy the state.interests(currenly being checked items)
      let cloned = this.state.interests.slice();

      //1b find the particular one to remove
      //we know that it is an array . we can manipulate it using the index that was clicked on

      let itemToRemove = cloned.findIndex(function (element) {
        //find the one that was unchecked(event.target.value)--> return the index
        return element === event.target.value;
      });

      //2. index is found, so modify the array "state"
      console.log(`index: ${itemToRemove}`);
      //remove item
      cloned.splice(itemToRemove, 1);
      this.setState({
        interests: cloned,
      });
    }
  };

  //using spread operators
  updateInterestsSpread = (event) => {
    if (this.state.interests.includes(event.target.value) === false) {
      //makes a copy of the original array and push in new value
      let cloned = [...this.state.interests, event.target.value];
      this.setState({
        interests: cloned,
      });
    } else {
      /* //normal way to find index 
      let cloned = this.state.interests.slice();
      //find index to remove first

      let itemToRemove = cloned.findIndex(function (element) {
        //find the one that was unchecked(event.target.value)--> return the index
        return element === event.target.value;
      });*/

      //using indexof to find 
      //["swimming","eating","eyepowering"] -> hence indexOf(target select value)
      //-> returns the numerical index
      let itemToRemove = this.state.interests.indexOf(event.target.value);

      //copy to the part before the index to remove [a,b,c]
      //copy the last part after the index to remove [d,e,f]
      //[a,b,c, itemToRemove, d,e ,f ]
      let cloned = [...this.state.interests.slice(0,itemToRemove),...this.state.interests.slice(itemToRemove +1)]
      
      //reactive programming doesn't like you to modify it directly
      //this.state.interests -> no!!
      this.setState({
        interests: cloned
      })
    }
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

        {/* --- Checkboxes setup  */}
        <div>
          <label>Please tell us about your interests:</label>
          <input
            type="checkbox"
            name="interests"
            value="sleeping"
            checked={this.state.interests.includes["sleeping"]}
            onChange={this.updateInterests}
          />
          <label>Sleeping</label>
          <input
            type="checkbox"
            name="interests"
            value="cycling"
            checked={this.state.interests.includes["cycling"]}
            onChange={this.updateInterests}
          />
          <label>Cycling</label>

          <input
            type="checkbox"
            name="interests"
            value="coding"
            checked={this.state.interests.includes["coding"]}
            onChange={this.updateInterestsSpread}
          />
          <label>Coding</label>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterFormAdvChk;
