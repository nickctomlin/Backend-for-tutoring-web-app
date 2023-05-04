import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
const FavoriteList = () => {
  const { logout,isAuthenticated,getAccessTokenSilently,user  } = useAuth0();
  //const [tutors, setTutor] = useState(<div></div>);
  const [favorite, setFavorite]  = useState(<div></div>);
  var t
  var hold = "http://localhost:4000/tutors";
  const response =  axios.get(hold);
  var fL = response.data;

  

  useEffect(() => {
    callApi().then(()=>{
      if (t != null) {
        console.log("Here At at Favorite List")
        console.log(t[0].tutorId);
        console.log(t[1].tutorId);
      setFavorite(
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
     <div >
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
    const token = await getAccessTokenSilently();
    const response = await axios.get('http://localhost:4000/returnFavorites', {
  headers: {
    authorization: `Bearer ${token}`,
  }
});
  //console.log(response.data);
  t = response.data;
   console.log("return favorites + " + t);
  //console.log(checker);
      }catch (error) {
          console.log(error.message);
      }
  
  }



        return (
      <ResponsiveMasonry
      columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
    >
    <section id="tutorlist">
    <h1><center>Favorite List</center></h1>
    <br></br>
    {favorite}
    </section>
    </ResponsiveMasonry>
    );
    };
    
    export default FavoriteList;