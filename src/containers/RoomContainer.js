import React, { useState } from "react";
import Room from "../components/rooms/Room";
import RoomDetail from "../components/rooms/RoomDetail";

const RoomContainer = ({ rooms }) => {
  const [search, setSearch] = useState("");
  let roomList;

  roomList = rooms.map((room, index) => {
    return (
      <li key={index}>
        <RoomDetail room={room} />
      </li>
    );
  });

  const handleInput = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  if (search) {
    let reducedList = rooms.filter((room) => {
      console.log(room.roomName.slice(0, search.length).toLowerCase(), search);
      return room.roomName.slice(0, search.length).toLowerCase() == search;
    });

    roomList = reducedList.map((room, index) => {
      return (
        <li key={index}>
          <RoomDetail room={room} />
        </li>
      );
    });
  }

  return (
    <>
      <input type="text" onChange={handleInput} value={search} />
      <div className="rooms-container">
        <ul>{roomList ? roomList : null}</ul>
      </div>
    </>
  );
};
export default RoomContainer;
