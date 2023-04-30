import React from 'react'

const Header = () => {
    return (
      <div>
        <header className="masthead">
        <img src="assets/img/logo.png" width = "300" height = "300" alt="..." />
          <div className="container">
            

            <div className="masthead-subheading">Find an expert tutor at your fingertips.</div>
            <div></div>
            
            <a className="btn btn-primary btn-xl text-uppercase" href="#services">
              See How We Can Help You
            </a>
          </div>
        </header>
      </div>
    );
};

export default Header