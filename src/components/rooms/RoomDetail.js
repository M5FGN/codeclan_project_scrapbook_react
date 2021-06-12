import React from 'react';
import RoomButtons from './RoomButtons'

const RoomDetail = () => {

    return (

        <div className="card detailsbox">
            <h1>Room Name</h1>
            <p>Room Bio</p>
            <p>Members</p>
            <RoomButtons />
        </div>
    )

}

export default RoomDetail;