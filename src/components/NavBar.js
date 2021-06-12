import React from "react";
import Logo from "../components/Logo";

const NavBar = () => {

    return (
        <div className="nav">
            <div className="logo"><Logo /></div>
            <div className="links">
                <ul>
                <li><a href="">My Profile</a></li>
                    <li><a href="">Log Out</a></li>
                   
                </ul>
            </div>
        </div>
    )
}
export default NavBar;