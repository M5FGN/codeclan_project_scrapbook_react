import React from 'react';


const Post = ({post}) => {

    return (

            <ul className="card gallery post">
                <li className="postitem"> <div>
                <img className="postimg imgtop" src={post.img_link} alt="" /> 
                <h3>{post.caption}</h3> </div></li>
            </ul>

    )

}
export default Post;