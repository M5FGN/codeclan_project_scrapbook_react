import React, { useState, useEffect } from "react";
import User from "../components/users/User";
import UserDetail from "../components/users/UserDetail";
import UserRooms from "../components/users/UserRooms";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

const UserContainer = ({ user }) => {
  const [rooms, setRooms] = useState([]);

  if (!user) {
    return "Loading...";
  }

  // const url = "/users/" + user.id;

  return (
    <div>
      <NavBar />
      <h1>{user.name}</h1>
      <div className="top">
        <div className="detail">
          <UserDetail user={user} />
        </div>
        <div className="feature">
          <Slider />
        </div>
      </div>

      <div className="gallery">
        <UserRooms user={user} />
      </div>

      <Footer />
    </div>
  );
};
export default UserContainer;
