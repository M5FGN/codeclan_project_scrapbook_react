import React, { useState } from 'react';
import UserContainer from './UserContainer';
import UserForm from '../components/users/UserForm';
import RoomContainer from './RoomContainer';

const MainContainer = () => {
    const [rooms, setRooms] = useState([]);
    const [user, setUser] = useState({});


    return (
<div>

<p>Main Container</p>
{/* If user not logged on ... */}
<UserForm setUser={setUser} />

{/* If user has already logged on ... */}
<UserContainer />

{/* Room Container */}
<RoomContainer />

</div>

    )
}
export default MainContainer;