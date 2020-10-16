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
import AlternateLogin from "./components/AlternateLogin/AlternateLogin";

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
          <Route path="/alternatelogin">
            <AlternateLogin />
          </Route>
          <PrivateRoute path="/user/order">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/user/servicelist">
            <ServiceList />
          </PrivateRoute>
          <PrivateRoute path="/user/review">
            <Review />
          </PrivateRoute>
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
