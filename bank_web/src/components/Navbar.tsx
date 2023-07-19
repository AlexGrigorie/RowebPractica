import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import CoinSubMenu from "./CoinSubMenu";

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/");
    window.location.reload();
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <nav className="navbar-custom">
      <Link to="/dashboard" className="nav-link">
        Dashboard
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
      {token && (
        <div className="btn nav-link text-danger" onClick={handleLogout}>
          Log out
        </div>
      )}
    </nav>
  );
};

export default NavBar;
