<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

const RoomDetail = ({ room }) => {
  return (
    <div>
      <h2>{room ? room.roomName : null}</h2>
      <Link to={`/rooms/${room ? room.id : null}`}>show</Link>
    </div>
  );
};

export default RoomDetail;
=======
import React from 'react';
import RoomButtons from './RoomButtons'
import RoomUsers from './RoomUsers'

const RoomDetail = ({foundRoom}) => {

    return (

        <div className="card detailsbox">
            <h2>{foundRoom.roomName}</h2>
            <p>{foundRoom.bio}</p>
            <RoomUsers foundRoom={foundRoom} />
            <RoomButtons />
        </div>
    )

}

export default RoomDetail;
>>>>>>> develop
