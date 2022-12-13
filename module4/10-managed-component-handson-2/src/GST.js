import React from "react";

export default class GST extends React.Component {
  state = {
    gst: 0,
    bill: 0,
    serviceCharge: 0,
    total: 0
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <label>Bill amount:</label>
          <input
            type="text"
            name="bill"
            value={this.state.bill}
            onChange={this.updateField}
          />
          <button onClick={this.calculate}>Calculate GST</button>
        </div>
      </React.Fragment>
    );
  }
  updateField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  calculate = (e) => {
    this.setState({
      gst: 0.07 * this.state.bill,
      serviceCharge: 0.1 * this.state.bill,
      total: 1.17 * this.state.bill
    });
  };
}
