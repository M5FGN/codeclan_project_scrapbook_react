import React, { useEffect, useState } from "react";
import UserContainer from "./UserContainer";
import UserForm from "../components/UserForm";
import SignUp from "../components/SignUp";
import RoomContainer from "./RoomContainer";
import NavBar from "../components/NavBar";
import Request from "../helpers/request";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useHistory,
  Redirect,
} from "react-router-dom";
import Room from "../components/Room";
import { findAllByAltText } from "@testing-library/dom";

const MainContainer = () => {
  const [room, setRoom] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(null);
  let history = useHistory();

  let url = "http://localhost:8080/api/";

  const RenderRoom = (props) => {
    let foundRoom;
    const request = new Request("http://localhost:8080/api/rooms");
    const id = props.match.params.id;
    request.getById(Number(id)).then((room) => setRoom(room));
    return <Room foundRoom={room} />;
  };

  useEffect(() => {
    const requestUsers = new Request(url + "users/");
    const userId = window.sessionStorage.getItem("userId");
    requestUsers.getById(Number(userId)).then((user) => setUser(user));
    const requestRooms = new Request(url + "rooms");
    requestRooms.get().then((rooms) => setRooms(rooms));
  }, []);

  if (user) {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/login">
              <Redirect to="/" />
            </Route>
            <Route
              exact
              path="/"
              render={() => <UserContainer user={user} />}
            />
            <Route
              exact
              path="/rooms"
              render={() => {
                return <RoomContainer rooms={rooms} />;
              }}
            />
            <Route
              path={"/rooms/:id"}
              render={(props) => {
                const id = props.match.params.id;
                const foundRoom = user.rooms.find((room) => {
                  return Number(room.id) == Number(id);
                });

                return <Room foundRoom={foundRoom} user={user} />;
              }}
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
