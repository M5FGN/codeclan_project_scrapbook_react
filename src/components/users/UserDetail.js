import React, { useEffect, useState } from "react";
import UserRooms from "../users/UserRooms";
import UserButtons from "./UserButtons";

const UserDetail = ({ user, setUser }) => {
  const [imgUrl, setImgUrl] = useState(null);

  return (
    <div className="card detailsbox">
      <h2 data-testid="name">{user.name}</h2>
      <img className="profileimg" src={user.profilePicture ? user.profilePicture : null} alt="" />
      <p>{user.dateOfBirth}</p>
      <p>{user.bio}</p>
      <UserButtons user={user} setUser={setUser} setImgUrl={setImgUrl} />
    </div>
  );
};
export default UserDetail;
