import React from 'react';
import Post from '../posts/Post'

const RoomPosts = ({posts}) => {

    const postComp = posts.map((post, index) => {
      return <Post key={index} post={post}/>
    })

    return (
        <div>
            <h2 className="poststitle">Room Posts</h2>
        
        <div className="card twenty">
            
            {postComp}
        </div>
        </div>
    )
}
export default RoomPosts;