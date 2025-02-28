import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, course, duration, fees, phone, email } = this.props.data;
    return (
      <div
        className="card"
        style={{
          border: "1px solid black",
          padding: "10px",
          margin: "10px",
          borderRadius: "10px",
        }}
      >
        <h3>{name}</h3>
        <p>{course}</p>
        <p>{duration}</p>
        <strong>{fees}</strong>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
