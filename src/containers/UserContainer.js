import React from 'react';
import User from '../components/users/User';
import UserDetail from '../components/users/UserDetail';

const UserContainer =({user}) =>{

    if (!user){
        return "Loading..."
    }

    // const url = "/users/" + user.id;

    return (

        <div>
        <h1>User Container</h1>


        <UserDetail user={user} />

        </div>
    )
    

}
export default UserContainer;