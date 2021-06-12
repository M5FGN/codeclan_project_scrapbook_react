import React, { useState } from "react";
import RoomDetail from "../rooms/RoomDetail";
import Chat from "../Chat";
import NavBar from "../NavBar";
import RoomPosts from "../rooms/RoomPosts";
import Footer from "../Footer";

const Room = ({ foundRoom }) => {
  return (
    <div>
      <NavBar />
      <h1>{foundRoom ? foundRoom.roomName : null}</h1>
      <div class="top">
<div className="detail"><RoomDetail /></div>
<div className="feature"><Chat /></div>
</div>
      <RoomPosts />
      <Footer />
    </div>
  );
};
export default Room;
