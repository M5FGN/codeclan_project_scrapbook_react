import React from "react";
import Logo from "../components/Logo";
import { Link, useHistory } from "react-router-dom";
import RoomContainer from "../containers/RoomContainer";

const NavBar = ({ user, rooms }) => {
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
      <RoomContainer rooms={rooms} user={user} />
      <div className="links">
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
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
