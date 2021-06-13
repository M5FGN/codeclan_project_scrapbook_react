import React from "react";
import { useHistory } from "react-router";
import Request from "../helpers/request";

const NoAccess = ({ user, roomToJoin }) => {
  let history = useHistory();
  const url = `/api/rooms/`;
  let error = "";
  const handlePasswordToJoin = (event) => {
    event.preventDefault();
    const password = event.target.password.value;

    const roomCopy = {
      ...roomToJoin,
    };

    if (password === roomToJoin.password) {
      const request = new Request(url + roomToJoin.id);

      roomCopy.users.push(user);
      request.patch(user);
      history.push("/");
    } else {
      error = "Wrong password";
    }
  };
  return (
    <div>
      <h2>
        You do not have access to {roomToJoin ? roomToJoin.roomName : null}!
      </h2>
      <h3>Enter Password to Join</h3>
      <form action="" onSubmit={handlePasswordToJoin}>
        <input type="text" name="password" />
        <input type="submit" />
      </form>
      <h3>{error}</h3>
    </div>
  );
};

export default NoAccess;
