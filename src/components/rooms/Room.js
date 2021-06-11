import React from 'react';
import RoomDetail from '../rooms/RoomDetail';

const Room = ({room}) => {

    
    return (
        <div>
            <h1>{room.roomName}</h1>
            <RoomDetail />
        </div>
    )

}
export default Room;