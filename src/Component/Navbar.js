import React from "react";
import { NavLink } from "react-router-dom";
import "../Style/Navbar/index.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            {" "}
            <NavLink to="/dashboard"> Dashboard </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/login"> Login </NavLink>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
