import React, { useState } from "react";
import { useHistory } from "react-router";
import Request from "../helpers/request";

const NoAccess = ({ user, roomToJoin }) => {
  let history = useHistory();
  const [error, setError] = useState(false);
  const url = `/api/rooms/`;

  const handlePasswordToJoin = (event) => {
    event.preventDefault();
    const password = event.target.password.value;

    if (password === roomToJoin.password) {
      const request = new Request(url + roomToJoin.id);
      request.put(user);
      history.push(`/${user.id}`);
    } else {
      setError(!error);
    }
  };
  return (
    <div className="password-form">
      <h2>
        You do not have access to {roomToJoin ? roomToJoin.roomName : null}!
      </h2>
      <h3>Enter Password to Join</h3>
      <form action="" onSubmit={handlePasswordToJoin}>
        <input type="password" name="password" />
        <input type="submit" />
      </form>
      <h3>{error ? "Wrong Password" : null}</h3>
    </div>
  );
};

export default NoAccess;
