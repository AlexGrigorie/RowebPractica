import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const CoinSubMenu = () => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const handleClick = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };
  const handleMouseLeave = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };

  return (
    <div className="nav-dropdown">
      <button className="nav-link" onClick={handleClick}>
        Coin options
      </button>
      {isSubMenuVisible && (
        <ul
          onClick={handleClick}
          onMouseLeave={handleMouseLeave}
          className="sub-menu"
        >
          <li>
            <Link to="/coin/all">Show all</Link>
          </li>
          <li>
            <Link to="/coin/create">Create</Link>
          </li>
          <li>
            <Link to="/coin/edit">Edit</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CoinSubMenu;
