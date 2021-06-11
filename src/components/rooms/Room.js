import React, { useState } from "react";
import RoomDetail from "../rooms/RoomDetail";

const Room = ({ foundRoom }) => {
  return (
    <div>
      <h1>{foundRoom ? foundRoom.roomName : null}</h1>
    </div>
  );
};
export default Room;
