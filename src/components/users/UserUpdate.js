import React, { Component, useState, useHistory } from "react";
import Request from "../../helpers/request";
import { storage } from "../../firebase";

const UserUpdate = ({ user, setUser, setImgUrl }) => {
  const [profile, setProfile] = useState(null);

  const UserUpdateForm = (event) => {
    event.preventDefault();
    const request = new Request("http://localhost:8080/api/users/" + user.id);
    const bio = event.target.bio.value;
    const updateUser = {
      ...user,
    };
    updateUser.bio = bio;

    const uploadTask = storage.ref(`profile-pics/${profile.name}`).put(profile);
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
            updateUser.profilePicture = url;
            request.put(updateUser);
            setImgUrl(url);
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
    <form className="form" onSubmit={UserUpdateForm}>
      <br></br>
      <label htmlFor="">Bio</label>
      <br></br>
      <input data-testid="bio" type="text" name="bio" />
      <br></br>

      <label htmlFor="">Profile Picture</label>
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
        value="Update Profile"
      />
    </form>
  );
};

// const UserUpdateDetails = () => {
//     const [error, setError] = useState(null);
//     const [email, setEmail] = useState(null);

//     const userid = window.sessionStorage.getItem("userId");
//     console.log("userid "+ userid);

//     const request = new Request("http://localhost:8080/api/users"+"/"+userid);

//     const handleUpdateUserDetails = (event) => {
//         // event.preventDefault();
//         // const bio = event.target.bio.value;
//         // const dob = event.target.DOB.value;
//         // const profilePicture = event.target.profilepicture.value;

//         const user = {
//             bio: bio,
//             dateOfBirth: dob,
//             profilePicture: profilePicture,
//         };

//         //request.post(user);

//       };
//     }

//   handleClick = () => {
//    this.props.toggle();
//   };

export default UserUpdate;

//feature/userupdate
