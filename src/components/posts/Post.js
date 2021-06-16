import React from 'react';


const Post = ({post}) => {

    return (

            <ul className="card gallery post">
                <li className="postitem"> <div>
                <h3>{post.caption}</h3> </div></li>
                <img className="postimg" src={post.img_link} alt="" /> 
            </ul>

    )

}
export default Post;