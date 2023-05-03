import React, {useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookAppointments = () => {
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

  const addButton = () =>{
    
  }
  const majorstaughtHandler = (e) =>{
    //console.log(e.target.value);
    
  setTaught( e.target.value )
  }

  const addDate = (e) =>{

  }

  const  submitButton= ()=>{
    //console.log("Here in Try for User")
    //console.log(user1);
    axios.post('http://localhost:4000/user', {
        userName: user.nickname,
        password: "Test",
        tutorID: TutorID,
        ExpectedGradDate: ExpectedGradDate,
        major: major,
        daysAvailable: daysAvailable
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

  function clickHandler () {
    handleApi();
    submitButton();
  }

  return (
    <div>
    {isAuthenticated && 
      <div className="form-container">
        <div className="loginbox">
        <legend className="title">Book an Appointment</legend>
        <label for="username">Tutor ID</label>
        <input type="text" name="UTD ID" onChange={TutorIDHandler} placeholder="Tutor ID" value={TutorID} required/>
        <form className='available' style={{margin: '10px', padding: '10px'}}>
          <label for="Date Available">Days and Times Available</label>
          <label>Choose Day: </label>
          <select name="Day" id="Day" style={{margin: '5px', padding: '5px'}}>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Tuesday">Friday</option>
            <option value="Wednesday">Saturday</option>
            <option value="Thursday">Sunday</option>
          </select>
          <label>From: </label>
          <input type="time" style={{margin: '5px', padding: '5px'}}/>
          <label>To: </label>
          <input type="time" style={{margin: '5px', padding: '5px'}}/>
          <button className='addTime' onClick={addButton}>Add Time</button>
        </form>
        <input type="file" name="file" onChange={handleImage}/>
        <button className="submit-button" onClick={clickHandler}>Submit</button>
        </div>
      </div>
    }
  </div>
  );
};

export default BookAppointments;