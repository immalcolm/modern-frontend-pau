import React from "react";

//MANAGED COMPONENT will be managed by App.js (parent)
//1. Create a function based component that takes in props
//2. props data is from parent 
export default function RegisterFormFunc(props) {
  return (
    <React.Fragment>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={props.fullName}
          name="fullName"
          onChange={props.update}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          value={props.email}
          name="email"
          onChange={props.update}
        />
      </div>
      <button onClick={props.register}>Register</button>

    </React.Fragment>
  );
}
