import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserNavigation from "./UserNavigation";
import UserHome from "./UserHome";
import AboutUs from './AboutUs';
import Header from "./Header";
import Footer from "./Footer";
import { useAuth0, isAuthenticated} from "@auth0/auth0-react";

function UserPage()  {
  const { loginWithRedirect,loginWithPopup, isAuthenticated } = useAuth0();

  return ( 
  <div>
    <div><UserNavigation>
            <Routes>
              <Route exact path="/" element={<UserHome />} />
              <Route exact path="/about" element={<AboutUs />} />
            </Routes>
          </UserNavigation>
    </div>
    <Header/>
    <UserHome/>
    <AboutUs/>
    <Footer/>
  </div>
  //return <button onClick={() => loginWithPopup()}>Log In With loginWithPopup</button>
  );
};

export default UserPage;