import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link, useHistory } from "react-router-dom";
import RoomContainer from "../containers/RoomContainer";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = ({ user, rooms }) => {
  let history = useHistory();
  const handleLogOut = () => {
    window.sessionStorage.clear();
    history.push("/");
    window.location.reload();
  };

  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="nav">
      <div className="logo">
        <Logo />
      </div>

      <div className="search">
        <RoomContainer rooms={rooms} user={user} />
      </div>
      <div className={isActive ? "links show" : "links hide"}>
        <div className="links">
          <ul>
            <li>
              <Link to={`/${user.id}/rooms/new`}>Add Room</Link>
            </li>
            <li>
              {" "}
              <Link to={`/${user.id}`}>My Profile</Link>
            </li>
            <li>
              <Link to="/" onClick={handleLogOut}>
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <button className="hamburger" onClick={handleToggle}>
        <GiHamburgerMenu />
      </button>
    </div>
  );
};
export default NavBar;
