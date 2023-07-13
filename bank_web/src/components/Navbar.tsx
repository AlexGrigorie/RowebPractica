import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import CoinSubMenu from "./CoinSubMenu";

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <div>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="deposit-menu"
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
      </div>
      <CoinSubMenu />
    </nav>
  );
};

export default NavBar;
