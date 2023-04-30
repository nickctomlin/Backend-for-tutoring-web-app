import React from 'react'

const Header = () => {
    return (
      <div>
        <header className="masthead">
        <img src="assets/img/navbarlogo.png" width = "300" height = "300" alt="..." />
          <div className="container">
            

            <div className="masthead-subheading">Welcome To UTD Tutoring</div>
            <div></div>
            
            <a className="btn btn-primary btn-xl text-uppercase" href="#services">
              Tell Me More
            </a>
          </div>
        </header>
      </div>
    );
};

export default Header