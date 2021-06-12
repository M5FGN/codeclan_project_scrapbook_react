import React from 'react';

const RoomUsers = ({foundRoom}) => {

const roomUsersList = foundRoom.users;

console.log(roomUsersList);

const roomUsersNodes = roomUsersList.map((user, index) => {
  return (
    <li className="roomusersitems" key={index}>
          <h3>{user.name}</h3>
      </li>
  );
});

return (
  <div>
    <ul className="roomusers">{roomUsersNodes}</ul>
  </div>
    )
}
export default RoomUsers;