import React, {useState} from "react";
import Request from "../helpers/request";
import { useHistory } from "react-router-dom";
import Logo from "./Logo"
import Footer from "../components/Footer";
import { isCompositeComponentWithType } from "react-dom/test-utils";

const SignUp = () => {

  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);
  // const [foundUser, setFoundUser] = useState(null);

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

    emailReq.getByEmail(email).then((user) => {

      setError("Email already exists")
      console.log(user)

    }).catch(error => {
      setError("Turn your router off and on again")
        const newUser = {
        email: email,
        name: name,
        password: password,
        dateOfBirth: dob,
      };
  
      if (password === confirmPassword) {
        request.post(newUser);
        history.push("/login");
      } else {
        setError("Passwords don't match")
      }
    });

  };

  return (

    <div>
    
      <Logo />

    <div className="card formbox">
      <h2>Sign Up to ScrapBook ...</h2>
      <form  data-testid="signed-up" className="form" onSubmit={handleSignUp}>
      <label htmlFor="">Email:</label>
        <br></br>
        <input data-testid="email" type="text" name="email" autocomplete="off" />
        <br></br>
        <label htmlFor="">Name:</label>
        <br></br>
        <input data-testid="name" type="text" name="name" autocomplete="off" />
        <br></br>
        <label htmlFor="">Date Of Birth:</label>
        <br></br>
        <input data-testid="DOB" type="text" name="DOB" autocomplete="off" />
        <br></br>
        <label htmlFor="">Password:</label>
        <br></br>
        <input data-testid="password" type="password" name="password" autocomplete="off" />
        <br></br>
        <label htmlFor="">Confirm Password:</label>
        <br></br>
        <input data-testid="confirmpassword" type="password" name="confirmPassword" autocomplete="off" />
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
