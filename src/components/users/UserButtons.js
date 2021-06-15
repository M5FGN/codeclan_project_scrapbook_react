import React, { useState } from 'react';
import UserUpdate from './UserUpdate';

const UserButtons=({user, setUser}) => {

  const [modal, setModal] = useState(false);
    

    const togglePop = () => {
     setModal(!modal);
    };



  
    return (
     <div>
      <div onClick={togglePop}>
        <button>Update Details</button>
      </div>
      {modal ? <UserUpdate user={user} setUser={setUser} toggle={togglePop} /> : null}
     </div>
    );
   }


  export default UserButtons;