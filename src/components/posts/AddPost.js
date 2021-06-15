import React, { Component, useState, useHistory } from "react";
import Request from "../../helpers/request";
import { storage } from "../../firebase";

const AddPost = ({ user, foundRoom }) => {
  const [profile, setProfile] = useState(null);

  const PostUploadForm = (event) => {
    event.preventDefault();
    const request = new Request("http://localhost:8080/api/posts");
    const caption = event.target.caption.value;

    const date = new Date();

    const dateTime = date.getDate();

    const post = {
      timeStamp: dateTime,
      caption: caption,
      img_link: "",
      room: {
        id: foundRoom.id,
        roomName: foundRoom.roomName,
        bio: foundRoom.bio,
        password: foundRoom.password,
        admin: foundRoom.admin,
      },
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        dateOfBirth: user.dateOfBirth,
        password: user.password,
      },
    };

    const uploadTask = storage.ref(`posts/${profile.name}`).put(profile);
    uploadTask.on(
      "state-changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("posts")
          .child(profile.name)
          .getDownloadURL()
          .then((url) => {
            post.img_link = url;
            request.post(post);
          });
      }
    );

    // user => setUser(user)
    // window.location.reload(false);
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setProfile(e.target.files[0]);
    }
  };

  return (
    <form className="form" onSubmit={PostUploadForm}>
      <br></br>
      <label htmlFor="">Caption</label>
      <br></br>
      <input data-testid="caption" type="text" name="caption" />
      <br></br>

      <label htmlFor="">Add Post</label>
      <br></br>
      <input
        // allows you to reach into your file directory and upload image to the browser
        type="file"
        name="profilepicture"
        onChange={handleChange}
      />
      <br></br>
      <input
        data-testid="submit"
        className="button"
        type="submit"
        value="Upload"
      />
    </form>
  );
};

export default AddPost;
