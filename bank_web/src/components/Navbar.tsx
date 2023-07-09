import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <nav>
      <ul>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="Navbar-deposit"
        >
          Deposit
          {isHovered && (
            <ul>
              <li>
                <Link to="/create-deposit">Create</Link>
              </li>
              <li>
                <Link to="/edit-deposit">Edit</Link>
              </li>
              <li>
                <Link to="/delete-deposit">Delete</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
