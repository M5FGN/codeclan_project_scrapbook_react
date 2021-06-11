import React from "react";
import { Link } from "react-router-dom";

const RoomDetail = ({ room }) => {
  return (
    <div>
      <h2>{room ? room.roomName : null}</h2>
      <Link to={`/rooms/${room? room.id:null}`}>show</Link>
    </div>
  );
};

export default RoomDetail;
