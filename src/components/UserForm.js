import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "./Logo";
import Footer from "../components/Footer";

const UserForm = ({ setUser }) => {
  let history = useHistory();

  const handleLogIn = function (event) {
    event.preventDefault();
    // console.dir(event.target);
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    fetch(
      `http://localhost:8080/api/users/login?email=${email}&password=${password}`
    )
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
        window.sessionStorage.setItem("userId", user.id);
      });
  };

  return (
    <div>
      <Logo />
      <div className="card formbox">
        <h2 data-testid="log-in-scrapbook">Log In to ScrapBook</h2>
        <form data-testid="logged-in" onSubmit={handleLogIn}>
          <label>Email:</label>
          <br></br>
          <input
            data-testid="user-name"
            type="text"
            autocomplete="off"
            placeholder="Enter E-mail"
            id="email"
          ></input>
          <br></br>
          <label>Password:</label>
          <br></br>
          <input
            data-testid="password"
            type="password"
            autocomplete="off"
            placeholder="Enter Password ..."
            id="password"
          ></input>
          <br></br>
          <input
            data-testid="log-in"
            className="button"
            type="submit"
            value="Log In ..."
          ></input>
        </form>
        <h3>
          <a href="/signup">Don't have an account?</a>
        </h3>
      </div>
      <Footer />
    </div>
  );
};
export default UserForm;
