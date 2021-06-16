import React from "react";
import { useHistory } from "react-router";
import RoomService from "../helpers/RoomService";
import UserService from "../helpers/UserService";

const CreateRoom = ({ user }) => {
  let history = useHistory();

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
    const userService = new UserService();
    roomService
      .post(newRoom)
      .then(() => roomService.getByRoomNameAndAdmin(roomName, admin))
      .then((room) => userService.addRoomToUser(room, user.id));

    history.push("/");
  };
  return (
    <div className="card formbox">
      <h2>Create Room</h2>
      <form action="" onSubmit={handleCreateRoom}>
        <label htmlFor="">Room Name:</label> <br></br>
        <input type="text" name="title" autocomplete="off"/> <br></br>
        <label htmlFor="">Room Bio</label> <br></br>
        <input type="text" name="bio" autocomplete="off"/> <br></br>
        <label htmlFor="">Room Password</label> <br></br>
        <input type="password" name="password" autocomplete="off"/> <br></br>
        <input className="button" type="submit" value="Add Room" />
      </form>
    </div>
  );
};

export default CreateRoom;
