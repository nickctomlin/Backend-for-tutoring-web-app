import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home';
import AboutUs from './AboutUs';
import Header from "./Header";
import SignUp from "./signup";
import LogoutButton from "./logout";
import { useAuth0, isAuthenticated} from "@auth0/auth0-react";

function App()  {
  const { loginWithRedirect,loginWithPopup, isAuthenticated } = useAuth0();

  return ( 
  <div>
    <div className="login">{!isAuthenticated && <button onClick={() => loginWithRedirect()}>Log In</button>}</div>
    <SignUp/>
    {/* <LogoutButton/> */}
  </div>
  //Popup Button
  //return <button onClick={() => loginWithPopup()}>Log In With loginWithPopup</button>
  );
};

export default App;