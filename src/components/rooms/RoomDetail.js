import React, {useState} from "react";
import RoomButtons from "./RoomButtons";
import RoomUsers from "./RoomUsers";
import AddPost from "../posts/AddPost"
import RoomUpdate from "../rooms/RoomUpdate";

const RoomDetail = ({ foundRoom, fetchUser, setUser, user }) => {

  const [modal, setModal] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);

  const togglePop = () => {
    setModal(!modal);
  };

  return (
    <div className="card detailsbox">
      <h2>{foundRoom.roomName}</h2>
      <img className="profileimg" src={foundRoom.image ? foundRoom.image : null} alt="" />
      <p>{foundRoom.bio}</p>
      <RoomUsers foundRoom={foundRoom} />
      {user.email === foundRoom.admin ? (
        <RoomButtons room={foundRoom} fetchUser={fetchUser} setUser={setUser} setImgUrl={setImgUrl} />
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
