import React, { useState } from "react";
import RoomDetail from "../rooms/RoomDetail";
import Chat from "../Chat";
import NavBar from "../NavBar";
import RoomPosts from "../rooms/RoomPosts";
import Footer from "../Footer";

const Room = ({ foundRoom, user }) => {
  return (
    <div>
      <NavBar />
      <h1>{foundRoom ? foundRoom.roomName : null}</h1>
      <div className="top">
      <div className="detail"><RoomDetail foundRoom={foundRoom} /></div>
      <div className="feature"><Chat foundRoom={foundRoom} user={user} /></div>
      </div>
      <RoomPosts posts={foundRoom.posts}/>
      <Footer />
    </div>
  );
};
export default Room;
