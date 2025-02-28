import React, { Component } from "react";
import Child from "./child";

class Lifiting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Lifiting",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(inputName) {
    this.setState({
      name: inputName,
    });
  }
  render() {
    return (
      <div>
        <Child onTempChange={this.handleChange} tempValue={this.state.name} />
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default Lifiting;
