import React, {useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './userSignUp.css';

const UserSignUp = () => {
    const navigate = useNavigate();
    const {user, logout,isAuthenticated  } = useAuth0();
    const [UTDID , setUTDID] = useState();
    const [ExpectedGradDate , setExpectedGradDate] = useState();
    const [major , setMajor] = useState();

  const UTDIDHandler = (e) =>{
    // console.log(e.target.value);
     
    setUTDID( e.target.value )
}
const expecHandler = (e) =>{
    //console.log(e.target.value);
    
   setExpectedGradDate( e.target.value )
}
const majorHandler = (e) =>{
    //console.log(e.target.value);
    
   setMajor( e.target.value )
}
const  submitButton= ()=>{
    //console.log("Here in Try for User")
    //console.log(user1);
    if(UTDID!= null && ExpectedGradDate!= null && major!=null)
    {
    axios.post('http://localhost:4000/user', {
        userName: user.nickname,
        password: "Test",
        UTDID: UTDID,
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

else
{
  alert("You have not Completed Some of the Forms");
}
}
return (
  <div>
    {isAuthenticated && 
      <div className="form-container">
        <div className="loginbox">
        <legend className="title">User Sign-Up</legend>
        <label for="username">UTD ID</label>
        <input type="text" name="UTD ID" onChange={UTDIDHandler} placeholder="UTDID" value={UTDID} required/>
        <label for="password">Expected Graduation Date</label>
        <input type="text" name="ExpectedGradDate" onChange={expecHandler} placeholder="Expected Grad Date" value={ExpectedGradDate} required/>
        <label for="password">Major</label>
        <input type="text" name="major" onChange={majorHandler} placeholder="Major" value={major} required/>
        <button className="submit-button" onClick={submitButton}>Submit Now</button>
        </div>
      </div>
    }
  </div>
);

};

export default UserSignUp;