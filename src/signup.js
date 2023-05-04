import React, {useState, useEffect, useMemo} from 'react'
import { useAuth0, User } from "@auth0/auth0-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserPage from './UserPage';
import TutorPage from './TutorPage';
const SignUp = () => {
    const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  var checker;
  const [r, setR] = useState(<div></div>);
  function changeTutor()
  {
    navigate("/tutorSignUp");
  }
  function changeUser()
  {
    navigate("/userSignUp");
  }
  useEffect(() => {
   callApi().then(()=>{
    console.log(checker);
  if (checker === "Neither") {
            console.log("Here At Neigther")
          setR(<div>
            <button onClick={changeTutor}>
                Are You a Tutor
            </button>
            <button onClick={changeUser}>
                Are you a User
            </button></div>);
        } else if (checker === "User") {
            console.log("Here At User")
          
            setR(<div><UserPage/></div>);
          
        } else if (checker === "Tutor"){
          
            setR(<div><TutorPage/></div>);
          
     }
    

});
  }, [isAuthenticated]);
  async function callApi(){
    try {
        
        //console.log("Is Authooo")
const token = await getAccessTokenSilently();
//console.log(token);
const response =  await axios.get("http://localhost:4000/check1",{headers: {
    authorization: `Bearer ${token}`,
  }});
//console.log(response.data);
checker = response.data;
//console.log(checker);
    }catch (error) {
        console.log(error.message);
    }

}
  if (isLoading) {
    return <div>Loading ...</div>;
  }
return (
    <div>
    {r}
    </div>
  );
};

export default SignUp;