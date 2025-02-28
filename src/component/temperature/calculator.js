import React, { Component } from "react";
import BoilingVerdict from "./boilingVerdict";
import TemperatureInput from "./tempInput";

class Calculator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {/* <TemperatureInput scale="c" />
        <BoilingVerdict celsius={parseFloat(temperature)} /> */}
      </>
    );
  }
}

export default Calculator;
