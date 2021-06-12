import React from "react";
import Logo from "../components/Logo";

const NavBar = () => {

    return (
        <div className="nav">
            <div className="logo"><Logo /></div>
            <div className="heading"></div>
            <div className="links">
                <ul>
                    <li>Log Out</li>
                    <li>My Profile</li>
                </ul>
            </div>
        </div>
    )
}
export default NavBar;