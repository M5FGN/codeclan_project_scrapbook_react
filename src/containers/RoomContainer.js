import React, { useState } from "react";
import RoomDetail from "../components/rooms/RoomDetail";
import RoomListItem from "../components/RoomListItem";

const RoomContainer = ({ user, rooms }) => {
  const [search, setSearch] = useState("");
  let roomList;

  const styles = {
    backgroundColor: "rgba(0,0,0,0.0)",
    transition: "background-color 1s",
  };

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
            <RoomListItem foundRoom={room} user={user} />
          </li>
        );
      }
    });
    styles.height = "100%";
    styles.backgroundColor = "rgba(0,0,0,0.3)";
  }

  return (
    <>
      <div className="search-bar-container" style={styles}>
        <div className="search-bar-element">
          <input
            className="search-bar"
            type="text"
            onChange={handleInput}
            value={search}
            placeholder="Search for a room"
          />
        </div>
        <div className="rooms-container">
          <ul>{roomList ? roomList : null}</ul>
        </div>
      </div>
    </>
  );
};
export default RoomContainer;
