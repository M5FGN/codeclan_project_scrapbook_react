import React from "react";

const NoAccess = ({ user }) => {
  return (
    <div>
      <h2>You do not have access to this page!</h2>
      <button>Request to Join</button>
    </div>
  );
};

export default NoAccess;
