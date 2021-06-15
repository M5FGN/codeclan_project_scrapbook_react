import React, {useState} from "react";
import Request from "../helpers/request";
import { useHistory } from "react-router-dom";
import Logo from "./Logo"
import Footer from "../components/Footer";
import { isCompositeComponentWithType } from "react-dom/test-utils";

const SignUp = () => {

  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  const request = new Request("http://localhost:8080/api/users");
  const emailReq = new Request("http://localhost:8080/api/users/signup");
  let history = useHistory();


  // const emailCheck = (event) => {
  //   setEmail(event.target.value);
  //   emailReq.getByEmail(email).then((user) => setUserFound(user));
  //   console.log(userFound)
  // }  

  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    const dob = event.target.DOB.value;

    const foundUser = emailReq.getByEmail(email);

    const user = {
      email: email,
      name: name,
      password: password,
      dateOfBirth: dob,
    };

    if (password === confirmPassword && !user) {
      request.post(user);
      history.push("/login");
    } else {
      setError("password's don't match")
      console.log("error message")
    }
  };

  return (

    <div>
    
      <Logo />

    <div className="card formbox">
      <h2>Sign Up to ScrapBook ...</h2>
      <form  data-testid="signed-up" className="form" onSubmit={handleSignUp}>
        <label htmlFor="">Name:</label>
        <br></br>
        <input data-testid="name" type="text" name="name" />
        <br></br>
        <label htmlFor="">Date Of Birth:</label>
        <br></br>
        <input data-testid="DOB" type="text" name="DOB" />
        <br></br>
        <label htmlFor="">Password:</label>
        <br></br>
        <input data-testid="password" type="text" name="password" />
        <br></br>
        <label htmlFor="">Confirm Password:</label>
        <br></br>
        <input data-testid="confirmpassword" type="text" name="confirmPassword" />
        <br></br>
        <input data-testid="submit" className="button" type="submit" value="Sign Up..." />
      </form>
      <p>{error}</p>
    </div>
    <Footer />
    </div>
  );
};

export default SignUp;
