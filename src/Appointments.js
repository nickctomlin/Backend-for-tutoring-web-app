import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
const Appointments = () => {
  const { logout,isAuthenticated,getAccessTokenSilently  } = useAuth0();
  var a;
  const [appointments, setAppointments] = useState(<div></div>);
  useEffect(() => {
    callApi().then(()=>{
     //console.log(checker);
   if (a != null) {
             console.log("Here At Appointments")
             console.log(a);
           setAppointments(
            <section className="page-section bg-dark" id="appointments">
      <h1><center>Tutoring Appointments</center></h1>
      <br></br>
            {a.map(app => (
              <div className="appointment" data-id="1">
        <h2>Appointment at </h2>{app.date}
        <p><strong>Tutor:</strong> {app.TeacherID}</p>
        <p><strong>Student:</strong> {app.StudentuserName}</p>
        <button class ="cancel-btn">Cancel Appointment</button>
      </div>
            ))}
              </section>
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
const token = await getAccessTokenSilently();
//console.log(token);
const response =  await await axios.get('http://localhost:4000/returnReservations', {
  headers: {
    authorization: `Bearer ${token}`,
  }
});
console.log(response.data);
a = response.data;
//console.log(checker);
    }catch (error) {
        console.log(error.message);
    }

}
        return (
          <div>
      {appointments}
  </div>
        );
    };
    
    export default Appointments;