import React from 'react'
import { useAuth0, isAuthenticated} from "@auth0/auth0-react";
import LogoutButton from "./logout";
import Profile from "./profile";

const Navigation = () => {
    const { user, loginWithRedirect,loginWithPopup, isAuthenticated } = useAuth0();

    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top">UTD Tutes</a>
                {/* <a class="navbar-brand" href="#page-top"><img src="assets/img/navbarlogo.png" alt="..." /></a> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#services">Find Tutors</a></li>
                        <li class="nav-item"><a class="nav-link" href="#portfolio">Book Appointments</a></li>
                        <li class="nav-item"><a class="nav-link" href="#about">About Us</a></li>
                        <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                    </ul>
                    
                </div>
                <div class="login">{!isAuthenticated && <button onClick={() => loginWithRedirect()}>Log Into Account</button>}</div>
                <LogoutButton/>
                <Profile/>
                
            </div>
        </nav>
        </div>
    );
};

export default Navigation;