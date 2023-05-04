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
  const [hoursAvailable, setHours] = useState();
  const [majorsTaught, setTaught] = useState();
  const [subjectList, setSubjectList] = useState([]);
  const [day, setDay] = useState();
  const [fromTime, setFromTime] = useState();
  const [toTime, setToTime] = useState();
  const [daysAvaliable, setDays] = useState([]);
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
    
  setDay( e.target.value )
  }
  const sethoursHandler = (e) =>{
    //console.log(e.target.value);
    
  setHours( e.target.value )
  } 
  
  const setToTimeHandeler = (e) =>{
    //console.log(e.target.value);
    
  setToTime( e.target.value )
  } 
  const setFromTimeHandeler = (e) =>{
    //console.log(e.target.value);
    
  setFromTime( e.target.value )
  } 

  const addButton = () =>{
    console.log("majors taught in add button" + majorsTaught);
    setSubjectList([...subjectList, majorsTaught]);
    setTaught("");
    
  }
  const majorstaughtHandler = (e) =>{
    //console.log(e.target.value);
    
  setTaught( e.target.value )
  }

  const addDate = () =>{
    //e.preventDefault();
    var dayToAdd = {
      date: day,
      opId: "O"+daysAvaliable.length,
      openingHours: {
        start:fromTime,
        end:toTime,
        isFilled:false,
        count:0
        },
      }
      console.log(dayToAdd);
      setDays([...daysAvaliable, dayToAdd]);
      setDay("");
      setToTime("");
      setFromTime("")
    }
  

  const  submitButton= ()=>{
    if(ExpectedGradDate!= null && subjectList!= [] && major!= null && daysAvaliable!=[])
    {
   var tutor = {
    tutorId:user.nickname,
      password:"Test123",
      UTDID:TutorID,
      ExpectedGradDate: ExpectedGradDate,
      SubjectList: subjectList,
      aboutMe: major,
      avaliableTime: daysAvaliable,
   }
   axios.post('http://localhost:4000/tutors', tutor, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(response => {
            navigate("/");
        })
      .catch(function (error) {
        console.log(error);
      });
   console.log(tutor);
    }
    else
    {
      alert("You have not Completed Some of the Forms");
    }
  }
  const [image,setImage] = useState();
  function handleImage(e) {
    console.log(e.target.files)
    setImage(e.target.files[0])
  }
  function handleApi()
  {
    const formData = new FormData()
    formData.append('image', image)
    axios.post('url', formData).then((res) => {
      console.log(res)
    })
  }
  return (
    <div>
    {isAuthenticated && 
      <div className="form-container">
        <div className="loginbox">
        <legend className="title">Tutor Sign-Up</legend>
        <label for="username">UTD ID</label>
        <input type="text" name="UTD ID" onChange={TutorIDHandler} placeholder="Tutor ID" value={TutorID} required/>
        <label for="password">Expected Graduation Date</label>
        <input type="text" name="ExpectedGradDate" onChange={expecHandler} placeholder="Expected Grad Date" value={ExpectedGradDate} required/>
        <label for="Major">Major</label>
        <input type="text" name="major" onChange={majorHandler} placeholder="Major" value={major} required/>
        <label type="What you Tutor?">What You Tutor?</label>
        <div className='addMajor'>
          <input type="text" name="majorsTaught" onChange={majorstaughtHandler} placeHolder="Ex. Computer Science" value={majorsTaught} required />
          <button className="AddMajor" onClick={addButton}>Add Major</button>
        </div>
          <label for="Date Available">Days and Times Available</label>
          <label>Choose Day: </label>
          <select name="Day" value = {day} onChange = {daysAvailableHandler} id="Day" style={{margin: '5px', padding: '5px'}}>
            <option value ="Select">Select</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Tuesday">Friday</option>
            <option value="Wednesday">Saturday</option>
            <option value="Thursday">Sunday</option>
          </select>
          <label>From: </label>
          <input value={fromTime} onChange= {setFromTimeHandeler} type="time" style={{margin: '5px', padding: '5px'}}/>
          <label>To: </label>
          <input value = {toTime} onChange={setToTimeHandeler}  type="time" style={{margin: '5px', padding: '5px'}}/>
          <button className='addTime' onClick={addDate}>Add Time</button>
        <input type="file" name="file" onChange={handleImage}/>
        <button className="submit-button" onClick={submitButton}>Submit</button>
        <div className="signup-links">
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