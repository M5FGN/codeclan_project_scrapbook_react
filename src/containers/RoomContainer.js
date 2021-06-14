import React, { useState } from "react";
import RoomDetail from "../components/rooms/RoomDetail";

const RoomContainer = ({ rooms }) => {
  const [search, setSearch] = useState("");
  let roomList;

  const handleInput = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  if (search) {
    let reducedList = rooms.filter((room) => {
      return room.roomName.slice(0, search.length).toLowerCase() == search;
    });

    roomList = reducedList.map((room, index) => {
      if (room) {
        return (
          <li key={index}>
            <RoomDetail room={room} />
          </li>
        );
      }
    });
  }

  return (
    <>
      <input
        type="text"
        onChange={handleInput}
        value={search}
        placeholder="Search for a room"
      />
      <div className="rooms-container">
        <ul>{roomList ? roomList : null}</ul>
      </div>
    </>
  );
};
export default RoomContainer;
