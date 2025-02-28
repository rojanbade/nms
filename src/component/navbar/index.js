import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-around",
        borderBottom: "1px solid #ccc",
        paddingBottom: "10px ",
      }}
    >
      <li>
        <NavLink
          style={{ textDecoration: "none", fontSize: "20px", color: "black" }}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={{ textDecoration: "none", fontSize: "20px", color: "black" }}
          to="/todo"
        >
          Todo
        </NavLink>
      </li>
      <li>
        <NavLink
          style={{ textDecoration: "none", fontSize: "20px", color: "black" }}
          to="/lifting"
        >
          Lifting
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
