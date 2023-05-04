import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import axios from "axios";
const TutorList= () => {
  const { logout,isAuthenticated,getAccessTokenSilently,user  } = useAuth0();
    var t
    const [tutors, setTutors] = useState(<div></div>);
    const [tutorSearch, setTutorSearch] = useState();
    const [subject, setSubject] = useState();
    const UTDIDHandler = (e) =>{
      // console.log(e.target.value);
       
      setTutorSearch( e.target.value )
  }
  async function callProtectedApi(i, tId,d,st,en,op){
    try {
        
 // console.log("Is Authooo")
const token = await getAccessTokenSilently();
//console.log(token);
console.log("date is " + d);
console.log("start is " + st);
console.log("end is " + en);
console.log("op is " + op);
const response = await axios.post('http://localhost:4000/addReservation',{index: i,tutor:tId,
obj:{
  AppointmentID:tId+user.nickname,
    StudentuserName:user.nickname,
    TeacherID: tId,
    date: d,
    start: st,
    end:en,
    opId:op
}
}, {
  headers: {
    authorization: `Bearer ${token}`,
  }
});
console.log('Response:')
console.log(response.data);
    }catch (error) {
        console.log(error.message);
    }

}
  const subjHandler = (e) =>{
    // console.log(e.target.value);
     
    setSubject( e.target.value )
}
const  subjSubmitButton= async ()=>{
  //console.log("Here in Try for User")
  //console.log(user1);
 
  //navigate("/");
  var hold = "http://localhost:4000/tutorsByFavorite/"+subject;
  const response =  await axios.get(hold);
  var nT = response.data;
  console.log(nT);
  if(nT.length==0)
  {
    alert("No Subject");
      setSubject("");
  }
  else
  {
    setTutors(
      <Masonry>
      {nT.map(tutor => (
<div style={{color: "white"}}>
  <div className='box'>
  <h2>{tutor.tutorId}</h2>
  <a>
    <div>
      <div></div>
      <b>About Me</b>: {tutor.aboutMe} 
      <br></br>
      <b>Expertise</b>: 
       <ul>
   {tutor.SubjectList.map(element => <li >{element}</li>)}
   </ul>
   <div>
          {tutor.avaliableTime.map((element,i) => 
            <div onClick={()=>bookAppointment(i,tutor.tutorId,element.date,element.openingHours.start,element.openingHours.end,element.opId )}>
             Date: {element.date}
              Start Time: {element.openingHours.start}
              End Time: {element.openingHours.end}
              Number Of People: {element.openingHours.count}
            </div>
            )}
        </div>
    </div>
    </a>
    </div>
</div> 
      ))}
    </Masonry>
    );
  }
}
  const   submitButton= async ()=>{
    //console.log("Here in Try for User")
    //console.log(user1);
    console.log(tutorSearch);
    var hold = "http://localhost:4000/tutors/" + tutorSearch
    const response =  await axios.get(hold);
    var nT = response.data;
    if(response.data=="")
    {
      alert("No Name");
      setTutorSearch("");
    }
    else
    {

      setTutors(
        <Masonry>
        {
  <div style={{color: "white"}}>
    <div className='box'>
    <h2>{nT.tutorId}</h2>
    <a>
        <div className="about-me">
        <div></div>
        <b>About Me</b>: {nT.aboutMe} 
        <br></br>
        <b>Expertise</b>: 
         <ul>
     {nT.SubjectList.map(element => <li >{element}</li>)}
     </ul>
     <div>
          {nT.avaliableTime.map((element,i)=> 
            <div onClick={()=>bookAppointment(i,nT.tutorId,element.date,element.openingHours.start,element.openingHours.end,element.opId )}>
              Date: {element.date}
              Start Time: {element.openingHours.start}
              End Time: {element.openingHours.end}
              Number Of People: {element.openingHours.count}
            </div>
            )}
        </div>
      </div>
      </a>
      </div>
  </div> 
  }
      </Masonry>
      );
    }
    //navigate("/");
}
const  resetButton= ()=>{
  //console.log("Here in Try for User")
  //console.log(user1);
  setTutorSearch("");
  setSubject("");
  callApi().then(()=>{
    //console.log(checker);
    //console.log("T is + " + t);
  if (t != null) {
            console.log("Here At Not Tutor List")
            console.log(t[0].avaliableTime[0]);
          setTutors(
           <Masonry>
           {t.map(tutor => (
     <div style={{color: "white"}}>
      <div className='box'>
       <h2>{tutor.tutorId}</h2>
       <a>
         <div className="about-me">
           <div></div>
           <b>About Me</b>: {tutor.aboutMe} 
           <br></br>
           <b>Expertise</b>: 
            <ul>
        {tutor.SubjectList.map(element => <li >{element}</li>)}
        </ul>
        <div>
          {tutor.avaliableTime.map((element,i)=> 
            <div onClick={()=>bookAppointment(i,tutor.tutorId,element.date,element.openingHours.start,element.openingHours.end,element.opId )}>
              Date: {element.date}
              Start Time: {element.openingHours.start}
              End Time: {element.openingHours.end}
              Number Of People: {element.openingHours.count}
            </div>
            )}
        </div>
         </div>
         </a>
         </div>
     </div> 
           ))}
         </Masonry>
         );
        } else
        {
         console.log("Mistake");
        }

});
  //navigate("/");
}
const bookAppointment = async (i,tutorName,date,start,end,opId)=>{
console.log("i is + " +i);
console.log("tutorName is + " + tutorName);
callProtectedApi(i,tutorName,date,start,end,opId).then(()=>{
  resetButton();
});
}
    useEffect(() => {
      callApi().then(()=>{
       //console.log(checker);
     if (t != null) {
               console.log("Here At Not Tutor List")
               console.log(t[0].avaliableTime[0]);
             setTutors(
              <Masonry>
              {t.map(tutor => (
        <div style={{color: "white"}}>
          <div className='box'>
          <h2>{tutor.tutorId}</h2>
          <a>
            <div className="about-me">
              <div></div>
              <b>About Me</b>: {tutor.aboutMe} 
              <br></br>
              <b>Expertise</b>: 
               <ul>
           {tutor.SubjectList.map(element => <li >{element}</li>)}
           </ul>
           <div>
          {tutor.avaliableTime.map((element,i )=> 
            <div onClick={()=>bookAppointment(i,tutor.tutorId,element.date,element.openingHours.start,element.openingHours.end,element.opId )}>
              Date: {element.date}<br/>
              Start Time: {element.openingHours.start}<br/>
              End Time: {element.openingHours.end}<br/>
              Number Of People: {element.openingHours.count}
              <br/>
            </div>
            )}
            </div>
            </div>
            </a>
            </div>
        </div> 
              ))}
            </Masonry>
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
  <div style={{padding: "25px 50px 25px 50px"}} >
    <section id="findtutors">
    <h1><center>Find the Tutor for You</center></h1>
    <div className="form-container">
        <div className="searchBox">
        <legend className="title">Search Tutor Name</legend>
        <label for="tutorId">Tutor Name</label>
        <input type="text" onChange={UTDIDHandler} placeholder="Tutor Name" value={tutorSearch} required/>
        <button className="submit-button" onClick={submitButton}>Search</button>
        <button onClick={resetButton} style={{ marginLeft: "10px" }}>Reset Button</button>
        </div>
      </div>
      <div className="form-container">
        <div className="searchBox">
        <legend className="title">Search for Subject</legend>
        <label for="subject">Subject Name</label>
        <input type="text" onChange={subjHandler} placeholder="Subject Name" value={subject} required/>
        <button className="submit-button" onClick={subjSubmitButton}>Search</button>
        <button onClick={resetButton} style={{ marginLeft: "10px" }}>Reset Button</button>
        </div>
      </div>
      </section>
  <ResponsiveMasonry
  columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
>
<section id="tutorlist">
<h1><center>Tutor List</center></h1>
<br></br>
{tutors}
</section>
</ResponsiveMasonry>
</div>
    );
    };
export default TutorList