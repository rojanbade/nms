import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
    // this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    return <h1>{this.state.time.toLocaleTimeString()}</h1>;
  }
}

export default Clock;
