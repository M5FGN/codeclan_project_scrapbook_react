import React from "react";
import { Link } from "react-router-dom";

const UserButtons = () => {
  return (
    <div className="buttonbox">
      <a className="button" href="/rooms/new">
        Add Room
      </a>
      <a className="button" href="">
        Join Room
      </a>
    </div>
  );
};
export default UserButtons;
