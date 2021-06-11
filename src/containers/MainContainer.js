import React, { useEffect, useState } from "react";
import UserContainer from "./UserContainer";
import UserForm from "../components/users/UserForm";
import RoomContainer from "./RoomContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useHistory,
} from "react-router-dom";

const MainContainer = () => {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(null);

  if (user) {
    return (
      <>
        <Router>
          <Switch>
            <Route />
          </Switch>
        </Router>
      </>
    );
  } else {
    return (
      <>
        <UserForm setUser={setUser} />
      </>
    );
  }
};

export default MainContainer;
