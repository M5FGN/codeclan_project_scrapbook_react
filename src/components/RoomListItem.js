import React from "react";
import { Link } from "react-router-dom";

const RoomListItem = ({ foundRoom, user }) => {
  return (
    <li>
      <Link to={`${user.id}/rooms/${foundRoom.id}`}>{foundRoom.roomName}</Link>
    </li>
  );
};

export default RoomListItem;
