import React from 'react';
import UserContainer from './UserContainer';
import UserForm from '../components/users/UserForm';
import RoomContainer from './RoomContainer';

const MainContainer = () => {

    return (
<div>

<p>Main Container</p>
{/* If user not logged on ... */}
<UserForm />

{/* If user has already logged on ... */}
<UserContainer />

{/* Room Container */}
<RoomContainer />

</div>

    )
}
export default MainContainer;