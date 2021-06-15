import React from "react";
import { Link } from "react-router-dom";

const RoomListItem = ({ foundRoom }) => {
  return (
    <li>
      <Link to={`/rooms/${foundRoom.id}`}>{foundRoom.roomName}</Link>
    </li>
  );
};

export default RoomListItem;
