import React from "react";
import GST from "./components/GST";
import Summary from "./components/Summary";

//1. port over states and logic
//2. change to class component
//3. update render with props attributes
//4. upgrade summary with isCalculate conditional rendering
export default class App extends React.Component {
  state = {
    gst: 0,
    bill: 0,
    serviceCharge: 0,
    total: 0,
    isCalculated: false,
  };

  updateField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  calculate = (e) => {
    this.setState({
      gst: 0.07 * this.state.bill,
      serviceCharge: 0.1 * this.state.bill,
      total: 1.17 * this.state.bill,
      isCalculated: true
    });
  };

  render() {
    return (
      <React.Fragment>
        <GST
          bill={this.state.bill}
          updateField={this.updateField}
          calculate={this.calculate}
        />

        {this.state.isCalculated ? (
          <Summary
            bill={this.state.bill}
            gst={`$ ${this.state.gst.toFixed(2)}`}
            serviceCharge={`$ ${this.state.serviceCharge.toFixed(2)}`}
            total={`$ ${this.state.total.toFixed(2)}`}
          />
        ) : null}
      </React.Fragment>
    );
  }
}
