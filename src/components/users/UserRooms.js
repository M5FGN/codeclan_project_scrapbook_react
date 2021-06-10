import React from 'react';
import Room from '../rooms/Room.js';



const UserRooms = ({user}) => {
    const userRoomList = user.rooms;
    const userRoomsNodes = userRoomList.map((room, index) => {
        return (<li key={index}>
         {room.roomName}
        </li>
    )
    })

  console.log(user);
    return (
        <div>
    
            <ul>{userRoomsNodes}</ul>
        
        </div>

    )

}
export default UserRooms;
