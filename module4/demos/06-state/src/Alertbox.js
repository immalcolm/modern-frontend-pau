import React from 'react';
/*
# Instructions  
Create a new component, named AlertBox. 
Give it a `state`, `message`, and display the message within a `<div>` with a `black solid border which is 4px in width`.  
After which, try to modify the message state using the React Developer Tools. 


## Enhancement
Add in props to the AlertBox component from the previous 
hands-on such that in the App component we can specify an 
initial value. 

*/
class Alertbox extends React.Component{
    
    state = {
        "message": this.props.initialValue//"Hello World"
    }

    render(){
        return <div style={{border: "4px solid black"}}>
            {this.state.message}
        </div>
    }
}

export default Alertbox;