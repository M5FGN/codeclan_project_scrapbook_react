import React from "react";
import { Link, Redirect, useHistory } from "react-router-dom";

const NavBar = () => {
  let history = useHistory();
  const handleLogOut = () => {
    window.sessionStorage.clear();
    window.location.reload(false);
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Find a Room</Link>
          </li>
          <li>
            <Link to="/login" onClick={handleLogOut}>
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
