import React, { useState, useEffect } from 'react';
import axios from "axios";

const TutorList= () => {
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
      <section className="page-section bg-light" id="tutorlist">
  <h1><center>Tutoring Listing</center></h1>
  <div className="flex-container">
  <a href="#">
        <div>{tutors[0].tutorID}
          <a href="#"></a>
          <div className="about-me">
            <div></div>
            <b>About Me</b>: UT Dallas Engineering Professor
            <br></br>
            <b>Expertise</b>: Requirements Engineering
          </div>
        </div>
        <br></br>
        </a>
        <a href="#">
            <div>Professor Nhut
            <a href="#">
                <div class="about-me">
                <div></div>
                <b>About Me</b>: UT Dallas Engineering Professor
                <br></br>
                <b>Expertise</b>: Networks
                </div>
            </a>
            </div>
        </a>

        <a href="#">
        <div>Professor Paulk
          <a href="#">
            <div class="about-me">
              <div></div>
              <b>About Me</b>: UT Dallas Engineering Professor
              <br></br>
              <b>Expertise</b>: Project Managment
            </div>
            </a>
        </div> 
      </a>

      <a href="#">
        <div>Professor Khan
          <a href="#">
            <div class="about-me">
              <div></div>
              <b>About Me</b>: UT Dallas Engineering Professor
              <br></br>
              <b>Expertise</b>:  Software Engineering
            </div>
            </a>
        </div> 
      </a>




  </div>
  
  </section>
      </div>
    );
    };
export default TutorList