import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { loginWithRedirect,loginWithPopup } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
  //return <button onClick={() => loginWithPopup()}>Log In With loginWithPopup</button>;
};

export default App;