import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/todo">Todo</Link>
      </li>
      <li>
        <Link to="/lifting">Lifting</Link>{" "}
      </li>
    </ul>
  );
};

export default Navbar;
