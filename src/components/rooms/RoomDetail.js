import React from "react";
import RoomButtons from "./RoomButtons";
import RoomUsers from "./RoomUsers";

const RoomDetail = ({ foundRoom, fetchUser, setUser, user }) => {
  return (
    <div className="card detailsbox">
      <h2>{foundRoom.roomName}</h2>
      <p>{foundRoom.bio}</p>
      <RoomUsers foundRoom={foundRoom} />
      {user.email === foundRoom.admin ? (
        <RoomButtons room={foundRoom} fetchUser={fetchUser} setUser={setUser} />
      ) : null}
    </div>
  );
};

export default RoomDetail;
