import React from "react";

//have a simple event handler that changes the state value

export default class Counter2 extends React.Component {
  state = {
    number: this.props.initialValue,
  };

  //change event handler
  //this.state.number = 1000; //this won't work
  //event handler must always use an arrow function
  change = () => {
    console.log("event change triggered");
    
    //using this.setState that takes in an object and modifies from there
    this.setState({
        number: this.state.number + 1 //Math.floor(Math.random()*100 + 1)
    })
  }

  //must always have a render 
  //onClick is a React event. Trigger change() to handle the event 
  render() {
    return (
      <React.Fragment>
        <div style={{ border: "1px solid red", width: "50px", height: "50px" }}>
          {this.state.number}
        </div>
        <button onClick={this.change}>Increment</button>
      </React.Fragment>
    );
  }
}
