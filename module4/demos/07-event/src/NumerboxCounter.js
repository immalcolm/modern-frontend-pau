import React from "react";

export default class NumerboxCounter extends React.Component {
  //[state]
  //1. data is private to the component
  //2. only the component can change
  //3. is frequently changed
  //4. is displayed to user
  state = {
    count: 0,
  };

  //arrow function
  //increment handler
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  //---- Conditional Rendering Rule [2] -------------
  //put if else in a function and return the JSX
  //check the state and return the appropriate content 
  printSmiley = () => {
    if(this.state.count % 2 !== 0 ){
        //React can render null
        return <span> 😡 </span>;
    }else{
        return null;
    }
  }


  render() {
    //----- Conditional Rendering Rule [1]------------
    //even thought we use if else.. we can store JSX inside
    //a JSX element is basically an object, so it can be saved into a variable
    //can't put if..else inside the return() statement 
    //but can be put as part of a function... which is our render()
    let extra = <span> 😊 </span>;
    if(this.state.count % 2 !== 0){
        //React can null . meaning it just shows nothing
        extra = null
    }

    return (
      <div
        style={{
          width: "100px",
          height: "50px",
          border: "2px solid black",
        }}
      > 
        {this.state.count} {extra} {this.printSmiley()}
        {/* Conditional Rendering [3]------ */}
        {/* tenary expression */}
        {this.state.count % 2 == 0 ? <span> 🐼 </span> : false}
        <div>
          <button onClick={this.increment}>+1</button>
          <button onClick={this.decrement}>-1</button>
        </div>
      </div>
    );
  }
}
