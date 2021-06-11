import React from "react";
import Request from "../helpers/request";
import { useHistory } from "react-router-dom";
import Logo from "./Logo"
import Footer from "../components/Footer";

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

    <div>
      <Logo />

    <div className="card">
      <h2>Sign Up to ScrapBook ...</h2>
      <form className="form" onSubmit={handleSignUp}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" />
        <label htmlFor="">Date Of Birth</label>
        <input type="text" name="DOB" />
        <label htmlFor="">Password</label>
        <input type="text" name="password" />
        <label htmlFor="">Confirm Password</label>
        <input type="text" name="confirmPassword" />
        <input className="button" type="submit" value="Sign Up..." />
      </form>
      <p>{errorMessage}</p>
    </div>
    <Footer />
    </div>
  );
};

export default SignUp;
