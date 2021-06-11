import React, { useEffect, useState } from "react";
import UserContainer from "./UserContainer";
import UserForm from "../components/UserForm";
import SignUp from "../components/SignUp";
import RoomContainer from "./RoomContainer";
import Request from "../helpers/request";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useHistory,
  Redirect,
} from "react-router-dom";

const MainContainer = () => {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(null);
  let history = useHistory();
  const request = new Request("http://localhost:8080/api/users/");

  useEffect(() => {
    const userId = window.sessionStorage.getItem("userId");
    request.getById(Number(userId)).then((user) => setUser(user));
  }, []);

  if (user) {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/login">
              <Redirect to="/" />
            </Route>
            <Route
              exact
              path="/"
              render={() => <UserContainer user={user} />}
            />
          </Switch>
        </Router>
      </>
    );
  } else {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route
              exact
              path="/login"
              render={() => <UserForm setUser={setUser} />}
            />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </>
    );
  }
};

export default MainContainer;
