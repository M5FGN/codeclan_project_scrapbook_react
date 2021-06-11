import React from 'react';
import { Router, Switch, useParams } from 'react-router';
import Room from '../rooms/Room.js';




const UserRooms = ({user}) => {

    const userRoomList = user.rooms;

    const userRoomsNodes = userRoomList.map((room, index) => {
        return (<li key={index}><a href={`/rooms/${room.id}`}>{room.roomName}</a></li>)
    })



    return (
        <div>

        <ul>{userRoomsNodes}</ul>       
        
        </div>

    )

}
export default UserRooms;
