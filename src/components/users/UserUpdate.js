import React, { Component, useState, useHistory } from "react";
import Request from "../../helpers/request";



const UserUpdate= ({user, setUser}) => {
  
  const UserUpdateForm = (event) => {
     event.preventDefault();
      const bio = event.target.bio.value; 
      const profilePicture = event.target.profilepicture.value; 
     const updateUser = {
       ...user

     }
     updateUser.bio = bio;
     updateUser.profilePicture = profilePicture;

    const request = new Request("http://localhost:8080/api/users/" + user.id );
    request.put(updateUser)
    // user => setUser(user)
    window.location.reload(false);

     }
      

    return(
      <form   className="form" onSubmit={UserUpdateForm}>   
          <br></br>
          <label htmlFor="">Bio</label>
          <br></br>
          <input data-testid="bio" type="text" name="bio" />
          <br></br>
          
          <label htmlFor="">Profile Picture</label>
          <br></br>
          <input data-testid="profilepicture" type="text" name="profilepicture" />
          <br></br>
          <input data-testid="submit" className="button" type="submit" value="Update Profile" />
      </form>
    )   
  }

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

