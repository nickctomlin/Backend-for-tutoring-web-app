import React, { useState, useEffect } from 'react';
import axios from "axios";

const Home = () => {
    var t
    const [tutors, setTutors] = useState([{"tutorID":"Sam"}],[{"tutorID":"Gopi"}]);
    
    useEffect(() => {
        callApi()
    });
    async function callApi(){
        try{
            const response = await axios.get('http://localhost:4000/tutors');
            setTutors(response.data);
            console.log(setTutors[0].tutorID)
        }
        catch{
            console.log("error")
        }
    }

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

  <section className="page-section bg-light" id="tutorlist">
  <h1><center>Tutoring Listing</center></h1>
  <div className="flex-container">
  <a href="#">
        <div>{tutors[0].tutorID}
          <a href="#"></a>
          <div className="about-me">
            <img src="prof1.png" alt="prof1"></img>
            <div></div>
            <b>About Me</b>: UT Dallas Engineering Professor
            <br></br>
            <b>Expertise</b>: Requirements Engineering
          </div>
        </div>
        <br></br>
        <a href="#">
            <div>Professor Nhut
            <a href="#">
                <div class="about-me">
                <img src="prof2.png" alt="prof2"></img>
                <div></div>
                <b>About Me</b>: UT Dallas Engineering Professor
                <br></br>
                <b>Expertise</b>: Networks
                </div>
            </a>
            </div>
        </a>
  </a>




  </div>
  
  </section>


  <section className="page-section bg-light" id="appointments">
      <h1><center>Tutoring Appointments</center></h1>
      <div className="appointment" data-id="1">
        <h2>Math Tutoring</h2>
        <p><strong>Tutor:</strong> John Doe</p>
        <p><strong>Time:</strong> Feb 16th, 2023 @ 2:00 PM - 3:00 PM</p>
        <p><strong>Location:</strong> Room 101</p>
        <button class ="cancel-btn">Cancel Appointment</button>
      </div>
      <div className="appointment" data-id="2">
        <h2>English Tutoring</h2>
        <p><strong>Tutor:</strong> Jane Smith</p>
        <p><strong>Time:</strong> Mar 2nd, 2023 @ 3:00 PM - 4:00 PM</p>
        <p><strong>Location:</strong> Library Room 205</p>
        <button class ="cancel-btn">Cancel Appointment</button>
        </div>
      <div className="appointment" data-id="3">
        <h2>Science Tutoring</h2>
        <p><strong>Tutor:</strong> Michael Lee</p>
        <p><strong>Date/Time:</strong> Feb 24, 2023 @ 4:00 PM - 5:00 PM</p>
        <p><strong>Location:</strong> Room 202</p>
        <button class ="cancel-btn">Cancel Appointment</button>
      </div>
      <div className="appointment" data-id="4">
        <h2>History Tutoring</h2>
        <p><strong>Tutor:</strong> Sarah Johnson</p>
        <p><strong>Time:</strong> Feb 29th, 2023 @ 5:00 PM - 6:00 PM</p>
        <p><strong>Location:</strong> Room 303</p>
        <button class ="cancel-btn">Cancel Appointment</button>
      </div>
  </section>
  <section className="page-section bg-light" id="team">
      <div className="container">
          <div className="text-center">
              <h2 className="section-heading text-uppercase">Our Team</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row">
              <div className="col-lg-4">
                  <div className="team-member">
                      <img className="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..." />
                      <h4>Parveen Anand</h4>
                      <p className="text-muted">Lead Designer</p>
                      <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter"></i></a>
                      <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="team-member">
                      <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." />
                      <h4>Diana Petersen</h4>
                      <p className="text-muted">Lead Marketer</p>
                      <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="fab fa-twitter"></i></a>
                      <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="team-member">
                      <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
                      <h4>Larry Parker</h4>
                      <p className="text-muted">Lead Developer</p>
                      <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter"></i></a>
                      <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">The following project was made for CS Project 4485. The contributers include Sri Vemugunta, Sam Krovvidi, Ayush Gopisetty, Sreya Nagumalla, Nicholas Tomlin</p></div>
          </div>
      </div>
  </section>

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