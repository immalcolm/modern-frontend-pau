//Qns 5.4 
//Answer 
//Lab 5.4

import React from "react";

export default class ColoredDiceIfElse extends React.Component {
  //generate random number
  //tap on math.random
  //Math.floor(Math.random() * N +1)
  //N is the limit
  state = {
    count: Math.floor(Math.random() * 6 + 1)
  };

  click = () => {
    this.setState({
        count:  Math.floor(Math.random() * 6 + 1)
    })
  }

  render() {

    //Conditional rendering 
    //Lab Answer 5.5 
    let diceColor = "black";
    if(this.state.count == 1){
        diceColor = "red"
    }
    if(this.state.count == 6){
        diceColor = "green"
    }

    return (
      <div
        style={{
          border: "2px solid red",
          width: "100px",
          height: "100px",
          color: diceColor
        }}

        onClick={this.click}
      >
        {this.state.count}
      </div>
    );
  }
}
