import React from 'react';
import Room from '../components/rooms/Room';
import RoomDetail from '../components/rooms/RoomDetail';


const RoomContainer = ({room}) => {

    if (!room){
        return "Loading..."
    }
    return (
    <div>
    <h1>Room Container</h1>
    <RoomDetail room={room} />
    </div>
)
}
export default RoomContainer;