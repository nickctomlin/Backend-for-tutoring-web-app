import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
const TutorImage = () => {
    const { logout,isAuthenticated,getAccessTokenSilently,user  } = useAuth0();
    const [image, setImage] = useState();
    useEffect(() => {
        const img = localStorage.getItem(user.nickname)
        if(img)
        {
            setImage(img);
        }
       }, [isAuthenticated]);
    return (
      <div>
        <div>
    <img id="preview" className="profilePic" src={image} alt="userpicture"/>
</div>
      </div>
    );
};

export default TutorImage