import React, { Component } from "react";

export class Child extends Component {
  constructor(props) {
    super(props);
    this.handleTempInputChange = this.handleTempInputChange.bind(this);
  }

  handleTempInputChange = (e) => {
    this.props.onTempChange(e.target.value);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={this.props.tempValue}
          onChange={this.handleTempInputChange}
        />
      </div>
    );
  }
}

export default Child;
