import React, { useEffect } from 'react';


const UserDetail = ({user}) => {


    return (
        <div>
            <h2>{user.name}</h2>
            <p> Profile Pic</p>
            <p>{user.dateOfBirth}</p>
            <p>{user.bio}</p>
        </div>

    )

}
export default UserDetail;