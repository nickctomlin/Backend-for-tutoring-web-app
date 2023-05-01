import React, { useState, useEffect } from 'react';
import axios from "axios";
import TutorList from './TutorList';
import Appointments from './Appointments';

const Home = () => {

    return (
      <div>
        <section className="page-section" id="services">
      <div className="container">
          <div className="text-center">
              <h2 className="section-heading text-uppercase">Find Tutors</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row text-center">
              <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                      <i className="fas fa-circle fa-stack-2x text-primary"></i>
                      <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="my-3">E-Commerce</h4>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                      <i className="fas fa-circle fa-stack-2x text-primary"></i>
                      <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="my-3">Responsive Design</h4>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                      <i className="fas fa-circle fa-stack-2x text-primary"></i>
                      <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="my-3">Web Security</h4>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
          </div>
      </div>
  </section>
  <section className="page-section bg-light" id="portfolio">
      <div className="container">
          <div className="text-center">
              <h2 className="section-heading text-uppercase">Book Appointments</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row">
              <div className="col-lg-4 col-sm-6 mb-4">
                  <div className="portfolio-item">
                      <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                          <div className="portfolio-hover">
                              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                          </div>
                          <img className="img-fluid" src="assets/img/portfolio/1.jpg" alt="..." />
                      </a>
                      <div className="portfolio-caption">
                          <div className="portfolio-caption-heading">Threads</div>
                          <div className="portfolio-caption-subheading text-muted">Illustration</div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4">
                  <div className="portfolio-item">
                      <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                          <div className="portfolio-hover">
                              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                          </div>
                          <img className="img-fluid" src="assets/img/portfolio/2.jpg" alt="..." />
                      </a>
                      <div className="portfolio-caption">
                          <div className="portfolio-caption-heading">Explore</div>
                          <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4">
                  <div className="portfolio-item">
                      <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                          <div className="portfolio-hover">
                              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                          </div>
                          <img className="img-fluid" src="assets/img/portfolio/3.jpg" alt="..." />
                      </a>
                      <div className="portfolio-caption">
                          <div className="portfolio-caption-heading">Finish</div>
                          <div className="portfolio-caption-subheading text-muted">Identity</div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                  <div className="portfolio-item">
                      <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                          <div className="portfolio-hover">
                              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                          </div>
                          <img className="img-fluid" src="assets/img/portfolio/4.jpg" alt="..." />
                      </a>
                      <div className="portfolio-caption">
                          <div className="portfolio-caption-heading">Lines</div>
                          <div className="portfolio-caption-subheading text-muted">Branding</div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                  <div className="portfolio-item">
                      <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                          <div className="portfolio-hover">
                              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                          </div>
                          <img className="img-fluid" src="assets/img/portfolio/5.jpg" alt="..." />
                      </a>
                      <div className="portfolio-caption">
                          <div className="portfolio-caption-heading">Southwest</div>
                          <div className="portfolio-caption-subheading text-muted">Website Design</div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                  <div className="portfolio-item">
                      <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                          <div className="portfolio-hover">
                              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                          </div>
                          <img className="img-fluid" src="assets/img/portfolio/6.jpg" alt="..." />
                      </a>
                      <div className="portfolio-caption">
                          <div className="portfolio-caption-heading">Window</div>
                          <div className="portfolio-caption-subheading text-muted">Photography</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <TutorList/>
  <Appointments/>

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

export default Home