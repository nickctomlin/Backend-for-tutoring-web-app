import React, { useState, useEffect } from 'react';
import axios from "axios";
import TutorList from './TutorList';
import TutorAppointments from './TutorAppointments';
import FavoriteList from './FavoriteList';
import TotalHours from './TotalHours';
import { useAuth0 } from "@auth0/auth0-react";
import TutorImage from './TutorImage';
const TutorHome = () => {
    const { logout,isAuthenticated,getAccessTokenSilently,user  } = useAuth0();
    const [image, setImage] = useState();
    return (
      <div>
    <TutorImage/>
  <TutorAppointments/>
  <TotalHours/>
  {/* <div className="py-5">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-md-3 col-sm-6 my-3">
                  <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/microsoft.svg" alt="..." aria-label="Microsoft Logo" /></a>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                  <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/google.svg" alt="..." aria-label="Google Logo" /></a>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                  <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/facebook.svg" alt="..." aria-label="Facebook Logo" /></a>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                  <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/ibm.svg" alt="..." aria-label="IBM Logo" /></a>
              </div>
          </div>
      </div>
  </div> */}
      </div>
    );
};

export default TutorHome