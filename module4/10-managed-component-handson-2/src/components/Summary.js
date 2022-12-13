import React from "react";

//1. add in props values 
export default function Summary(props) {
  return (
    <React.Fragment>
      <h1>Bill Summary</h1>
      <ul>
        <li>Original bill: ${props.bill}</li>
        <li>GST: ${props.gst}</li>
        <li>Service Charge: ${props.serviceCharge}</li>
        <li>Total: ${props.total}</li>
      </ul>
    </React.Fragment>
  );
}
