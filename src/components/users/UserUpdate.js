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



export default UserUpdate;


