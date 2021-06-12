import React from 'react';
import Room from '../components/rooms/Room';
import RoomDetail from '../components/rooms/RoomDetail';


const RoomContainer = ({room}) => {

    if (!room){
        return "Loading..."
    }
    return (
    <div>
    <RoomDetail room={room} />
    </div>
)
}
export default RoomContainer;