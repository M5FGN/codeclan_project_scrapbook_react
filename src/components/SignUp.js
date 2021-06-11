import React from "react";
import Request from "../helpers/request";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const request = new Request("http://localhost:8080/api/users");
  let history = useHistory();

  let errorMessage = "";
  const handleSignUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    const dob = event.target.DOB.value;

    const user = {
      name: name,
      password: password,
      dateOfBirth: dob,
    };

    if (password === confirmPassword) {
      request.post(user);
      history.push("/login");
    } else {
      errorMessage = "Passwords dont't match";
    }
  };
  return (
    <>
      <h2>Sign up</h2>
      <form onSubmit={handleSignUp}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" />
        <label htmlFor="">Date Of Birth</label>
        <input type="text" name="DOB" />
        <label htmlFor="">Password</label>
        <input type="text" name="password" />
        <label htmlFor="">Confirm Password</label>
        <input type="text" name="confirmPassword" />
        <input type="submit" value="Sign Up" />
      </form>
      <p>{errorMessage}</p>
    </>
  );
};

export default SignUp;
