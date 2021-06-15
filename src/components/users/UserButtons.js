import React, { useState } from "react";
import UserUpdate from "./UserUpdate";

const UserButtons = ({ user, setUser, setImgUrl }) => {
  const [modal, setModal] = useState(false);
  const togglePop = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div onClick={togglePop}>
        <button className="button">Update Details</button>
      </div>
      {modal ? (
        <UserUpdate
          user={user}
          setUser={setUser}
          toggle={togglePop}
          setImgUrl={setImgUrl}
        />
      ) : null}
    </div>
  );
};

export default UserButtons;
