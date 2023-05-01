import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
const TutorList= () => {
  const { logout,isAuthenticated  } = useAuth0();
    var t
    const [tutors, setTutors] = useState(<div></div>);
    
    useEffect(() => {
      callApi().then(()=>{
       //console.log(checker);
     if (t != null) {
               console.log("Here At Not Tutor List")
               console.log(t);
             setTutors(          <div className="flex-container">
              {t.map(tutor => (
        <a href="#">
        <div>{tutor.tutorId}
          <a href="#">
            <div class="about-me">
              <div></div>
              <b>About Me</b>: {tutor.aboutMe} 
              <br></br>
              <b>Expertise</b>: 
               <ul>
           {tutor.SubjectList.map(element => <li >{element}</li>)}
           </ul>
            </div>
            </a>
        </div> 
      </a>
              ))}
            </div>
            
            );
           } else
           {
            console.log("Mistake");
           }
   
   });
     }, [isAuthenticated]);
    async function callApi(){
      try {
          
          //console.log("Is Authooo")
  //const token = await getAccessTokenSilently();
  //console.log(token);
  const response =  await axios.get("http://localhost:4000/tutors");
  //console.log(response.data);
  t = response.data;
  //console.log(checker);
      }catch (error) {
          console.log(error.message);
      }
  
  }
    return (
      <div>
  <section className="page-section bg-dark" id="tutorlist">
  <h1><center>Tutoring Listing</center></h1>
      {tutors}
</section>
      </div>
    );
    };
export default TutorList