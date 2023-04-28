import React from "react";
import { useAuth0, isAuthenticated} from "@auth0/auth0-react";

const App = () => {
  const { loginWithRedirect,loginWithPopup, isAuthenticated } = useAuth0();

  return <div>
    {!isAuthenticated && <button onClick={() => loginWithRedirect()}>Log In</button>}
  </div>;
  //return <button onClick={() => loginWithPopup()}>Log In With loginWithPopup</button>;
};

export default App;