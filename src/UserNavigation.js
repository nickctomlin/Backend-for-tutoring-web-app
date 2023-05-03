import React from 'react'
import { useAuth0, isAuthenticated} from "@auth0/auth0-react";
import LogoutButton from "./logout";
import Profile from "./profile";

const UserNavigation = () => {
    const { user, loginWithRedirect,loginWithPopup, isAuthenticated } = useAuth0();

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top">UTD Tutes</a>
                {/* <a className="navbar-brand" href="#page-top"><img src="assets/img/navbarlogo.png" alt="..." /></a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#findtutors">Find Tutors</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Book Appointments</a></li>
                        <li className="nav-item"><a className="nav-link" href="#userappointments">Tutoring Appointments</a></li>
                        <li className="nav-item"><a className="nav-link" href="#tutorlist">Tutor List</a></li>
                        <li className="nav-item"><a className="nav-link" href="#favorites">Favorites List</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
                        <LogoutButton/>
                    </ul>
                    
                </div>
                <Profile/>
                
            </div>
        </nav>
        </div>
    );
};

export default UserNavigation;