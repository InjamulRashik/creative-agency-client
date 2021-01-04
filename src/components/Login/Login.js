import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import "./Login.css";
import logo from "../../logo.png";
import gIcon from "../../images/google.png";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";

firebase.initializeApp(firebaseConfig);
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {});
  };
  return (
    <div className="container">
      <img className="logo" src={logo} alt="" />
      <div className="content container">
        <div className="form container">
          <h2>
            <b>Login With</b>
          </h2>{" "}
          <br />
          <button onClick={handleLogin} className="btn loginBtn">
            {" "}
            <span>
              <img className="icon" src={gIcon} alt="" />
            </span>{" "}
            <b>Continue with Google</b>
          </button>{" "}
          <br />
        </div>
      </div>
    </div>
  );
};

export default Login;
