import React from 'react';
import User from '../components/users/User';
import Message from '../components/messages/Message';
import Post from     '../components/posts/Post';

const UserContainer =() =>{

    return (

        <div>
        <h1>User Container</h1>
        <User />
        <Message />
        <Post />

        </div>
    )
    

}
export default UserContainer;