import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const TutorSignUp = () => {
  const { logout,isAuthenticated  } = useAuth0();
  return (
    <div>
   { isAuthenticated && 
   <div>
   TutorSignUP
   </div>
    }
    </div>
  );
};

export default TutorSignUp;