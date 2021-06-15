import React, {useState} from "react";
import RoomButtons from "./RoomButtons";
import RoomUsers from "./RoomUsers";
import AddPost from "../posts/AddPost"

const RoomDetail = ({ foundRoom, fetchUser, setUser, user }) => {

  const [modal, setModal] = useState(false);
  const togglePop = () => {
    setModal(!modal);
  };

  return (
    <div className="card detailsbox">
      <h2>{foundRoom.roomName}</h2>
      <p>{foundRoom.bio}</p>
      <RoomUsers foundRoom={foundRoom} />
      {user.email === foundRoom.admin ? (
        <RoomButtons room={foundRoom} fetchUser={fetchUser} setUser={setUser} />
      ) : null}
                <div className="marginbot">
        <div onClick={togglePop}>
        <button className="button">Add Post</button>
      </div>
      {modal ? (
        <AddPost
          user={user}
          foundRoom = {foundRoom}
          toggle={togglePop}
        />
      ) : null}
      </div>
    </div>
  );
};

export default RoomDetail;
