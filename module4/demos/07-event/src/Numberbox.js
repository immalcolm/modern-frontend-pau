import React from 'react';

export default class Numberbox extends React.Component{

    //setup the base state values
    state = {
        count : 0
    }

    //handlers always have an arrow function
    //function name doesn't matter 

    clickHandler = ()=>{
        //alert("Hello World");
        //modify our state values
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        //when referring to the event handler, do NOT use parentensis () at the end
        //we can use this.<handler> or call handler directly
        
        return <div
        onClick= {this.clickHandler}
        style={{
            border: "1px solid black",
            width: "50px",
            height: "50px"
        }}
        >
            {this.state.count}
        </div>
    }
}