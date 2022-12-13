import React from "react";

export default function Summary(props) {
  return (
    <React.Fragment>
      <ul>
        <li>Original bill:</li>
        <li>GST:</li>
        <li>Service Charge:</li>
        <li>Total:</li>
      </ul>
    </React.Fragment>
  );
}
