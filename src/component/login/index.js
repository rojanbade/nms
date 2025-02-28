import React from "react";
import { useFormData } from "../../utils/formData";
import { useNavigate } from "react-router";

function Login() {
  const { formData, handleChange } = useFormData();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Login", formData);
  }

  const handleClick = () => {
    navigate("/product");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>

      <button onClick={handleClick}>Get product</button>
    </div>
  );
}

export default Login;
