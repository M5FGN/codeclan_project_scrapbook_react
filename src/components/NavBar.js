import React from "react";
import Logo from "../components/Logo";
import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
  let history = useHistory();
  const handleLogOut = () => {
    window.sessionStorage.clear();
    window.location.reload(false);
  };

  return (
    <div className="nav">
      <div className="logo">
        <Logo />
      </div>
      <div className="links">
        <ul>
          <li>
            {" "}
            <Link to="/">My Profile</Link>
          </li>
          <li>
            <Link to="/login" onClick={handleLogOut}>
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
