import React, {useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TutorSignUp = () => {
  const { user, logout,isAuthenticated  } = useAuth0();
  const navigate = useNavigate();
  const [TutorID , setTutorID] = useState();
  const [ExpectedGradDate , setExpectedGradDate] = useState();
  const [major , setMajor] = useState();
  const [daysAvailable, setdaysAvailable] = useState();
  const [hoursAvailable, setHours] = useState();
  const [majorsTaught, setTaught] = useState();

  const TutorIDHandler = (e) =>{
    // console.log(e.target.value);
     
    setTutorID( e.target.value )
  }
  const expecHandler = (e) =>{
      //console.log(e.target.value);
      
    setExpectedGradDate( e.target.value )
  }
  const majorHandler = (e) =>{
      //console.log(e.target.value);
      
    setMajor( e.target.value )
  }
  const daysAvailableHandler = (e) =>{
    //console.log(e.target.value);
    
  setdaysAvailable( e.target.value )
  }
  const sethoursHandler = (e) =>{
    //console.log(e.target.value);
    
  setHours( e.target.value )
  } 
  const majorstaughtHandler = (e) =>{
    //console.log(e.target.value);
    
  setTaught( e.target.value )
  }
  const  submitButton= ()=>{
    //console.log("Here in Try for User")
    //console.log(user1);
    axios.post('http://localhost:4000/user', {
        userName: user.nickname,
        password: "Test",
        tutorID: TutorID,
        ExpectedGradDate: ExpectedGradDate,
        major: major
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(response => {
            navigate("/");
        })
      .catch(function (error) {
        console.log(error);
      });
    //navigate("/");
  }
  return (
    <div>
    {isAuthenticated && 
      <div className="form-container">
        <div className="loginbox">
        <legend className="title">Tutor Sign-Up</legend>
        <label for="username">UTD ID</label>
        <input type="text" name="UTD ID" onChange={TutorIDHandler} placeholder="UTDID" value={TutorID} required/>
        <label for="password">Expected Graduation Date</label>
        <input type="text" name="ExpectedGradDate" onChange={expecHandler} placeholder="Expected Grad Date" value={ExpectedGradDate} required/>
        <label for="Major">Major</label>
        <input type="text" name="major" onChange={majorHandler} placeholder="Major" value={major} required/>
        <label for="Date Available">Date Available</label>
        <input type="date" id="start" name="Start Date" />
        <button className="submit-button" onClick={submitButton}>Submit Now</button>
        <div class="signup-links">
				<a href="TutorSU.html">Sign Up as Student</a>
				<a href="login.html">Back to Login</a>
            </div>
        </div>
      </div>
    }
  </div>
  );
};

export default TutorSignUp;