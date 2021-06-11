import React, { useState, useEffect } from "react";
import User from "../components/users/User";
import UserDetail from "../components/users/UserDetail";
import UserRooms from "../components/users/UserRooms";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const UserContainer = ({ user }) => {
  const [rooms, setRooms] = useState([]);

  if (!user) {
    return "Loading...";
  }

  // const url = "/users/" + user.id;

  return (
    <div>
      <NavBar />

      <UserDetail user={user} />
      <UserRooms user={user} />
      <Footer />
    </div>
  );
};
export default UserContainer;
