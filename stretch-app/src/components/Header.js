import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h2>Full-Stack</h2>
      </div>
      <nav>
        <NavLink to="/add">Add</NavLink>
      </nav>
    </header>
  );
};

export default Header;
