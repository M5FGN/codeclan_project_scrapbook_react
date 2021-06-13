import React from 'react';
import Post from '../posts/Post'

const RoomPosts = ({posts}) => {

    const postComp = posts.map((post, index) => {
      return <Post key={index} post={post}/>
    })

    return (
        <div className="card gallery twenty">
            <h2>Post Gallery goes here!!!</h2>
            {postComp}
        </div>
    )
}
export default RoomPosts;