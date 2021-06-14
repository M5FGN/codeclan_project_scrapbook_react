import React, { useEffect } from "react";
import UserRooms from "../users/UserRooms";
import UserButtons from "./UserButtons";

const UserDetail = ({ user }) => {
  return (
    <div className="card detailsbox">
      <h2>{user.name}</h2>
      <p> Profile Pic</p>
      <p>{user.dateOfBirth}</p>
      <p>{user.bio}</p>
      <UserButtons />
    </div>
  );
};
export default UserDetail;
