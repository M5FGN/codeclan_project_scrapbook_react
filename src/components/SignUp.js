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

    <div className="card formbox">
      <h2>Sign Up to ScrapBook ...</h2>
      <form className="form" onSubmit={handleSignUp}>
        <label htmlFor="">Name:</label>
        <br></br>
        <input type="text" name="name" />
        <br></br>
        <label htmlFor="">Date Of Birth:</label>
        <br></br>
        <input type="text" name="DOB" />
        <br></br>
        <label htmlFor="">Password:</label>
        <br></br>
        <input type="text" name="password" />
        <br></br>
        <label htmlFor="">Confirm Password:</label>
        <br></br>
        <input type="text" name="confirmPassword" />
        <br></br>
        <input className="button" type="submit" value="Sign Up..." />
      </form>
      <p>{errorMessage}</p>
    </div>
    <Footer />
    </div>
  );
};

export default SignUp;
