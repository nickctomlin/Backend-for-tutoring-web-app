import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const FavoriteList = () => {
  const { isAuthenticated  } = useAuth0();
  //const [tutors, setTutor] = useState(<div></div>);

  var t
  var hold = "http://localhost:4000/tutors";
  const response =  axios.get(hold);
  var fL = response.data;

  

  useEffect(() => {
    callApi().then(()=>{

      console.log(fL)

  });

  }, [isAuthenticated]);


  async function callApi(){
  try {const response =  await axios.get("http://localhost:4000/returnFavorites");
  //console.log(response.data);
  t = response.data;
  //console.log(checker);
      }catch (error) {
          console.log(error.message);
      }
  
  }



        return (
          <div>
           <section id="favorites">
    <div className="container">
        <h1>
            <center>Favorites List</center>
        </h1>
      <br></br>
      <div className="appointment" data-id="1">
        <h2>Math Tutoring</h2>
        <p><strong>Tutor:</strong> John Doe</p>
        <p><strong>Time:</strong> Feb 16th, 2023 @ 2:00 PM - 3:00 PM</p>
        <p><strong>Location:</strong> Room 101</p>
      </div>
      <div className="appointment" data-id="2">
        <h2>English Tutoring</h2>
        <p><strong>Tutor:</strong> Jane Smith</p>
        <p><strong>Time:</strong> Mar 2nd, 2023 @ 3:00 PM - 4:00 PM</p>
        <p><strong>Location:</strong> Library Room 205</p>
        </div>
      <div className="appointment" data-id="3">
        <h2>Science Tutoring</h2>
        <p><strong>Tutor:</strong> Michael Lee</p>
        <p><strong>Date/Time:</strong> Feb 24, 2023 @ 4:00 PM - 5:00 PM</p>
        <p><strong>Location:</strong> Room 202</p>
      </div>
      <div className="appointment" data-id="4">
        <h2>History Tutoring</h2>
        <p><strong>Tutor:</strong> Sarah Johnson</p>
        <p><strong>Time:</strong> Feb 29th, 2023 @ 5:00 PM - 6:00 PM</p>
        <p><strong>Location:</strong> Room 303</p>
      </div>
      </div>
  </section>
  </div>
        );
    };
    
    export default FavoriteList;