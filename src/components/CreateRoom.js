import React from "react";
import RoomService from "../helpers/RoomService";

const CreateRoom = ({ user }) => {
  const handleCreateRoom = (event) => {
    event.preventDefault();
    const roomName = event.target.title.value;
    const bio = event.target.bio.value;
    const password = event.target.password.value;
    const admin = user.email;
    const newRoom = {
      roomName: roomName,
      bio: bio,
      password: password,
      admin: admin,
    };
    const roomService = new RoomService();
    roomService.post(newRoom);
  };
  return (
    <div className="room-form">
      <h2>Create Room</h2>
      <form action="" onSubmit={handleCreateRoom}>
        <label htmlFor="">Room Name:</label>
        <input type="text" name="title" />
        <label htmlFor="">Room Bio</label>
        <input type="text" name="bio" />
        <label htmlFor="">Room Password</label>
        <input type="text" name="password" />
        <input type="submit" value="Add Room" />
      </form>
    </div>
  );
};

export default CreateRoom;
