import React, { useEffect, useState } from 'react';
import UserContainer from './UserContainer';
import UserForm from '../components/users/UserForm';
import RoomContainer from './RoomContainer';

const MainContainer = () => {
    const [rooms, setRooms] = useState([]);
    const [user, setUser] = useState(null);


    console.log(user);

if (user) {
    return (
        <div>
            <p>Main Container</p>
            <UserContainer user={user} />
        </div>
        ) } else {
    return (
        <>
            <UserForm setUser={setUser} />
        </>  )
        }
    }


export default MainContainer;