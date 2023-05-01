import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
function callApi(){
    axios.get("http://localhost:4000/").then(response=> console.log(response.data))
    .catch(error=>console.log(error))
}
async function callProtectedApi(){
    try {
        
 // console.log("Is Authooo")
const token = await getAccessTokenSilently();
//console.log(token);
const response =  await axios.post("http://localhost:4000/addReservation",{ index:0, tutor:"Nick",obj:{
  AppointmentID:"Nick"+user.nickname,
    StudentuserName:user.nickname,
    TeacherID:"Nick" ,
    date:"2018-07-22",
    start:0,
    end:2
}  },{headers: {
    authorization: `Bearer ${token}`,
  }
});
console.log(response.data);
    }catch (error) {
        console.log(error.message);
    }

}
  return (
    <div>
    {isAuthenticated && (
      <div className="profile"><img src={user.picture} width="40" height="40" className="rounded-circle"></img> Logged in as {user.name}</div>
      

      /* <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div> */
    )}

    { <ul>
      <li><button onClick={callApi}>Call Api Route</button></li>
      <li><button onClick={callProtectedApi}>Call Protected Api</button></li> 
    </ul> }
    </div>
  );
};

export default Profile;