import React from "react";
import { Link } from "react-router-dom";

const UserButtons = () => {
  const searchBarContainer = document.querySelector(".search-bar-container");
  const addBtn = document.querySelector(".button");

  console.log(addBtn);

  return (
    <div className="buttonbox">
     <a className="button" href="">Update Profile</a>
    </div>
  );
};
export default UserButtons;
