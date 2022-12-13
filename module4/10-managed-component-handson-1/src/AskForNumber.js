import React from "react";

export default function AskForNumber(props) {
  return (
    <React.Fragment>
      <input
        type="text"
        name="number1"
        value={props.number1}
        onChange={props.update}
      />
      <input
        type="text"
        name="number2"
        value={props.number2}
        onChange={props.update}
      />
      <button onClick={props.add}>Add</button>
    </React.Fragment>
  );
}
