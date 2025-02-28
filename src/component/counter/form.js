import React from "react";

const Form = ({ name, age, data }) => {
  return (
    <div>
      <h1>{data}</h1>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  );
};

export default Form;
