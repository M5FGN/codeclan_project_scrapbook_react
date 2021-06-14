import React, { useState } from "react";
import RoomDetail from "./rooms/RoomDetail";
import Request from "../helpers/request";
import NoAccess from "../components/NoAccess";

const Room = ({ foundRoom, user, roomToJoin }) => {
  if (!foundRoom) {
    return <NoAccess user={user} roomToJoin={roomToJoin} />;
  }
  return (
    <div>
      <h1>{foundRoom ? foundRoom.roomName : null}</h1>
    </div>
  );
};
export default Room;
