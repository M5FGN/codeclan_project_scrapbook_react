import React, { Component, useState, useHistory } from "react";
import Request from "../../helpers/request";
import { storage } from "../../firebase";

const RoomUpdate = ({ user, setUser, setImgUrl, room }) => {
  const [profile, setProfile] = useState(null);

  const RoomUpdateForm = (event) => {
    event.preventDefault();
    const request = new Request("http://localhost:8080/api/rooms/room/" + room.id);
    const bio = event.target.bio.value;

    const updateRoom = {
      ...room,
    };

    console.log(updateRoom);

    updateRoom.bio = bio == "" ? updateRoom.bio : bio;

    if (profile) {
      const uploadTask = storage
        .ref(`profile-pics/${profile.name}`)
        .put(profile);
      uploadTask.on(
        "state-changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("profile-pics")
            .child(profile.name)
            .getDownloadURL()
            .then((url) => {
              updateRoom.image = url;
              request.put(updateRoom);
              setImgUrl(url);
            }).then(() => {
              window.location.reload();
            });
        }
      );
    } else {
      request.put(updateRoom);
      window.location.reload();
    }
    // user => setUser(user)
    // window.location.reload(false);
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setProfile(e.target.files[0]);
    }
  };

  return (
    <form className="form" onSubmit={RoomUpdateForm}>
      <br></br>
      <label htmlFor="">Bio</label>
      <br></br>
      <input data-testid="bio" type="text" name="bio" />
      <br></br>

      <label htmlFor="">Room Picture</label>
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
        value="Update Room"
      />
    </form>
  );
};

export default RoomUpdate;