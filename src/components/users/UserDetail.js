import React, { useEffect } from 'react';
import UserRooms from "../users/UserRooms"


const UserDetail = ({user}) => {


    return (
        <div>
            <h2>{user.name}</h2>
            <p> Profile Pic</p>
            <p>{user.dateOfBirth}</p>
            <p>{user.bio}</p>
            <p><UserRooms user={user}/></p>
        </div>

    )

}
export default UserDetail;