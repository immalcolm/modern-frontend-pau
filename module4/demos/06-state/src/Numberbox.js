import React from "react";

// React.Component is a class from React
// When we do Numbebox extends React.Component, the Numberbox will inherit all the things inside React.Component
//you can right click and click on "Go to definition" and see what's under hood
//takes in all existing functionality of React.Component.
class Numberbox extends React.Component {
    //create a state for the Numberbox component
    //state itself can't change it's name 
    //reason: we inherited from React.Component 
    //a state stores data that is private to the component 
    //state itself is always an object hence needs state = {....}
    state = {
        count: 10
    }

    
    //all class based components in React must have a function named render
    //(e.g any class that extends React.Component)
    //render function: must return JSX
    //the meaning of the word "render" means to draw, or to display something 
    //to refer any variable in the class, we can use the keyword this
    //any property/state that has changed, render will be called again
    render(){
        //check that it renders everything state value is changed
        console.log("Hey, I'm rendering");

        //simple render to test first
        //return (<div>Hello World</div>);

        //let's involve state
        //state is an object hence we can use the dot notation
        //keyword this refers to the numberbox
        //".state" refers to the state itself
        //and since state is an object we use the dotnotation to reference the values within
        return (<div>Number: {this.state.count}</div>)
    }
}
export default Numberbox;

