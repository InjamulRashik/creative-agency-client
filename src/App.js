import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Order from "./components/User/Order/Order";
import Review from "./components/User/Review/Review";
import ServiceList from "./components/User/ServiceList/ServiceList";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AdminServiceList from "./components/Admin/AdminServiceList/AdminServiceList";
import AdminAddService from "./components/Admin/AdminAddService/AdminAddService";
import AdminMake from "./components/Admin/AdminMake/AdminMake";

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
          <PrivateRoute path="/user/order">
            <Order />
          </PrivateRoute>
          <Route path="/user/servicelist">
            <ServiceList />
          </Route>
          <Route path="/user/review">
            <Review />
          </Route>
          <Route path="/admin/servicelist">
            <AdminServiceList />
          </Route>
          <Route path="/admin/addservice">
            <AdminAddService />
          </Route>
          <Route path="/admin/makeadmin">
            <AdminMake />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
