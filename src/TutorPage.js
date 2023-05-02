import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TutorNavigation from "./TutorNavigation";
import TutorHome from "./TutorHome";
import AboutUs from './AboutUs';
import Header from "./Header";
import Footer from "./Footer";
import { useAuth0, isAuthenticated} from "@auth0/auth0-react";

function TutorPage()  {
  const { loginWithRedirect,loginWithPopup, isAuthenticated } = useAuth0();

  return ( 
  <div>
    <div><TutorNavigation>
            <Routes>
              <Route exact path="/" element={<TutorHome />} />
              <Route exact path="/about" element={<AboutUs />} />
            </Routes>
          </TutorNavigation>
    </div>
    <Header/>
    <TutorHome/>
    <AboutUs/>
    <Footer/>
  </div>
  //return <button onClick={() => loginWithPopup()}>Log In With loginWithPopup</button>
  );
};

export default TutorPage;