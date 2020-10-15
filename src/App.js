import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Order from "./components/User/Order/Order";
import SideBar from "./components/SharedComponent/SideBar/SideBar";
import Review from "./components/User/Review/Review";
import ServiceList from "./components/User/ServiceList/ServiceList";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/user/order">
            <Order />
          </Route>
          <Route path="/user/servicelist">
            <ServiceList />
          </Route>
          <Route path="/user/review">
            <Review />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
