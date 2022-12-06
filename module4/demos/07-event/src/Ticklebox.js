import React from "react";
/* credits to @vito */
export default class Ticklebox extends React.Component {
  state = {
    message: "hello"
  }
  hoverHandler = () => {
    this.setState({
      message: "that tickles!"
    })
  }
  render() {
    return (
      <div onMouseOver={this.hoverHandler}
        style={{
          border: "1px solid black",
          width: "50px",
          height: "50px"
        }}
        > {this.state.message}
        </div>
    )
  }
}