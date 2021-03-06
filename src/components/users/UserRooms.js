import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  useParams,
  Link,
} from "react-router-dom";

const UserRooms = ({ user }) => {
  const userRoomList = user.rooms;

  const userRoomsNodes = userRoomList.map((room, index) => {
    return (
      <li key={index}>
        <Link to={`${user.id}/rooms/${room.id}`}>
          <div className="card galleryitem">
            <h3>{room.roomName}</h3>
            <p>{room.bio}</p>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <div>
      <h2>My Rooms</h2>
      <div className="card gallery twenty">
        <ul>{userRoomsNodes}</ul>
      </div>
    </div>
  );
};
export default UserRooms;
