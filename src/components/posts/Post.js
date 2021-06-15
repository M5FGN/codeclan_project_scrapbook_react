import React from 'react';


const Post = ({post}) => {

    return (

            <ul className="card gallery post">
                <li className="postitem"> <div>
                <h3>{post.caption}</h3> </div></li> 
            </ul>

    )

}
export default Post;