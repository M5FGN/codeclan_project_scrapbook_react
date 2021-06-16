import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Request from "../../helpers/request";
import RoomUpdate from "../rooms/RoomUpdate";

const RoomButtons = ({ room, fetchUser, setUser, setImgUrl }) => {
  const [modal, setModal] = useState(false);
  const togglePop = () => {
    setModal(!modal);
  };
  
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
    <>
    <div className="buttonbox">
      <a className="button" onClick={handleDelete}>
        Delete Room
      </a>
    </div>
    <div onClick={togglePop}>
        <button className="button">Update Details</button>
      </div>
      {modal ? (
        <RoomUpdate
          room={room}
          toggle={togglePop}
          setImgUrl={setImgUrl}
        />
      ) : null}
    </>
  );
};
export default RoomButtons;
