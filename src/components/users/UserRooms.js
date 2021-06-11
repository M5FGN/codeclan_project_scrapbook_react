import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  useParams,
  Link,
} from "react-router-dom";
import Room from "../rooms/Room.js";

const UserRooms = ({ user }) => {
  const userRoomList = user.rooms;

  const userRoomsNodes = userRoomList.map((room, index) => {
    return (
      <li key={index}>
        <Link to={`/rooms/${room.id}`}>{room.roomName}</Link>
      </li>
    );
  });

  return (
    <div>
      <ul>{userRoomsNodes}</ul>
    </div>
  );
};
export default UserRooms;
