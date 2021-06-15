import React from "react";
import { useHistory } from "react-router-dom";
import Request from "../../helpers/request";

const RoomButtons = ({ room, fetchUser, setUser }) => {
  const url = "http://localhost:8080/api/rooms/";
  let history = useHistory();

  const handleDelete = (event) => {
    event.preventDefault();
    const request = new Request(url + room.id);
    request.delete();
    const user = fetchUser();
    setUser(user);
    window.location.reload(false);
  };

  const handleAddRoom = () => {};
  return (
    <div className="buttonbox">
      <a className="button" href="">
        Add Post
      </a>
      <a className="button" onClick={handleDelete}>
        Delete Room
      </a>
    </div>
  );
};
export default RoomButtons;
