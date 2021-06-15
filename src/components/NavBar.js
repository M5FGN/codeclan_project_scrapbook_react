import React, {useState} from "react";
import Logo from "../components/Logo";
import { Link, useHistory } from "react-router-dom";
import RoomContainer from "../containers/RoomContainer";
import {GiHamburgerMenu} from 'react-icons/gi';

const NavBar = ({ user, rooms }) => {
  let history = useHistory();
  const handleLogOut = () => {
    window.sessionStorage.clear();
    window.location.reload(false);
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
        <ul>
          <li>
            Add New Room
          </li>
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
      <button className="hamburger" onClick={handleToggle}>
    <GiHamburgerMenu/>
      </button>
      
    </div>
  );
};
export default NavBar;
