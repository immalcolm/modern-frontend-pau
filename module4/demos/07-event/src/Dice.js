//Lab 5.4

import React from "react";

export default class Dice extends React.Component {
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
    return (
      <div
        style={{
          border: "2px solid red",
          width: "100px",
          height: "100px",
        }}

        onClick={this.click}
      >
        {this.state.count}
      </div>
    );
  }
}
