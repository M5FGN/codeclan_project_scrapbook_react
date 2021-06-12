import React from 'react';
import RoomButtons from './RoomButtons'

const RoomDetail = ({foundRoom}) => {

    return (

        <div className="card detailsbox">
            <h2>{foundRoom.roomName}</h2>
            <p>{foundRoom.bio}</p>
            <p>Members</p>
            <RoomButtons />
        </div>
    )

}

export default RoomDetail;