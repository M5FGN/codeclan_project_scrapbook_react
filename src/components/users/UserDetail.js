import React, { useEffect } from "react";
import UserRooms from "../users/UserRooms";
import UserButtons from "./UserButtons";

const UserDetail = ({ user, setUser }) => {
  return (
    <div className="card detailsbox">
      <h2 data-testid="name">{user.name}</h2>
      <p> Profile Pic</p>
      <p>{user.dateOfBirth}</p>
      <p>{user.bio}</p>
      <UserButtons user={user} setUser={setUser} />
    </div>
  );
};
export default UserDetail;
