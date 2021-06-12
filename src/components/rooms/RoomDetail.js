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