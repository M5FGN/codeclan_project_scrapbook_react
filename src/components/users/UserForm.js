import React from "react";

const UserForm = ({ setUser }) => {
  const handleLogIn = function (event) {
    event.preventDefault();
    const name = event.target.name.value;
    const password = event.target.password.value;
    console.log(name, password);

    const user = fetch(
      `http://localhost:8080/api/users/login?name=${name}&password=${password}`
    )
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
      });
  };

  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={handleLogIn}>
        <label>Username ... </label>
        <input
          type="text"
          placeholder="Enter User Name ..."
          name="name"
        ></input>
        <label>Password ...</label>
        <input
          type="text"
          placeholder="Enter Password ..."
          name="password"
        ></input>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
};
export default UserForm;
