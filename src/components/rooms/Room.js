import React, { useEffect, useState } from "react";
import RoomDetail from "../rooms/RoomDetail";
import Chat from "../Chat";
import NavBar from "../NavBar";
import RoomPosts from "../rooms/RoomPosts";
import Footer from "../Footer";
import NoAccess from "../NoAccess";

const Room = ({ foundRoom, roomToJoin, user, fetchUser, setUser }) => {
  if (!foundRoom) {
    return <h1>No Room Found</h1>;
  }

  const userInRoom = foundRoom.users.find((roomUser) => {
    return roomUser.id == user.id;
  });

  if (!userInRoom) {
    return <NoAccess roomToJoin={roomToJoin} user={user} />;
  }

  return (
    <div>
      <h1>{foundRoom ? foundRoom.roomName : null}</h1>
      <div className="top">
        <div className="detail">
          {foundRoom ? (
            <RoomDetail
              foundRoom={foundRoom}
              fetchUser={fetchUser}
              setUser={setUser}
              user={user}
            />
          ) : null}
        </div>
        <div className="feature">
          <div className="feature">
            <Chat foundRoom={foundRoom} user={user} />
          </div>
        </div>
      </div>
      {foundRoom ? <RoomPosts posts={foundRoom.posts} /> : null}
      <Footer />
    </div>
  );
};
export default Room;
