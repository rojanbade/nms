import React, { Component } from "react";

class BoilingVerdict extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.celsius >= 100 ? (
          <p>The water would boil.</p>
        ) : (
          <p>The water would not boil.</p>
        )}
      </div>
    );
  }
}

export default BoilingVerdict;
