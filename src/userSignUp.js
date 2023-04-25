import React, {useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  return (
    <div>
   { isAuthenticated && 
   <div>
    <div>
            <input 
            type="text" 
            name="UTDID" 
            onChange={UTDIDHandler} 
            placeholder="UTDID" 
            value={UTDID}/>

            <br/>

            <input 
            type="text" 
            name="ExpectedGradDate" 
            onChange={expecHandler} 
            placeholder="Expected Grad Date" 
            value={ExpectedGradDate}/>

            <br/>

            <input 
            type="text" 
            name="major" 
            onChange={majorHandler} 
            placeholder="Major" 
            value={major}/>

            <br/>

            <button onClick={submitButton}>Submit Now</button>
        </div>
   </div>
    }
    </div>
  );
};

export default UserSignUp;