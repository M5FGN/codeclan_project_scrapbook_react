import React, { useState, useEffect } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
// import RecentPosts from '../components/users/RecentPosts';

function Slider({user}) {
  const [recentPosts, setRecentPosts] = useState([]);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = recentPosts.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, recentPosts]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  useEffect(() => {
    if(user.posts.length > 4){
      const posts = user.posts.filter((post, index) => {
        return index >= user.posts.length - 4;
      })
      setRecentPosts(posts);
    } else {
      setRecentPosts(user.posts)
    }
    // console.log(recentPosts)
  },[])

  return (
    <section className="card slider">
      <div className="title">
      </div>
      <div className="section-center">
        {recentPosts.map((sliderpost, sliderpostIndex) => {
          const { id, roomName, img_link, caption} = sliderpost;
          // const { id, roomName, img_link, caption, room_link } = sliderpost;

          let position = 'nextSlide';
          if (sliderpostIndex === index) {
            position = 'activeSlide';
          }
          if (
            sliderpostIndex === index - 1 ||
            (index === 0 && sliderpostIndex === recentPosts.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <h2 className="fifteen">Recent Posts</h2>
              <img src={img_link} alt={caption} className="sliderimg" />
              <h4>{roomName}</h4>
              <p className="text">{caption}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FaAngleLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FaAngleRight />
        </button>
      </div>
    </section>
  );
}

export default Slider;
