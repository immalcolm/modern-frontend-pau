//involve states
//1. have a class that extends React.Component (import react)
//2. have a state
//3. have a render that returns jsx
//4. remember to export

import React from "react";

export default class Counter extends React.Component {
  //we can't do this
  //this.state.number = 100

  //to change a state value we have to use this.setState({})

  //start with props
  //state itself is private, no other components or instances can change it
  //only the component instance can change it
  state = {
    number: this.props.initialValue,
  };

  render() {
    //we cannot reassign to a props after it has been set
    //this.props.initialValue = 100; //won't work
    return (
      <div>
        Initial value = {this.props.initialValue}
        <br />
        State = {this.state.number}
      </div>
    );
  }
}
