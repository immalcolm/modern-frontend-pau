import React from "react";

//1. make this a function with props

export default function GST(props) {
  console.log(props);

  return (
    <React.Fragment>
      <div>
        <label>Bill amount:</label>
        <input
          type="text"
          name="bill"
          value={props.bill}
          onChange={props.updateField}
        />
        <button onClick={props.calculate}>Calculate GST</button>
      </div>
    </React.Fragment>
  );
}
