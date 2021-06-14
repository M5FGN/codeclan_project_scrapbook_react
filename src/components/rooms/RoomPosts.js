import React from 'react';
import Post from '../posts/Post'

const RoomPosts = ({posts}) => {

    const postComp = posts.map((post, index) => {
      return <Post key={index} post={post}/>
    })

    return (
        <div className="card twenty">
            <h2 className="poststitle">Room Posts</h2>
            {postComp}
        </div>
    )
}
export default RoomPosts;