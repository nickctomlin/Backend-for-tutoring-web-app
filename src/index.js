import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import LogoutButton from "./logout";
import Profile from "./profile";

ReactDOM.render(
  <Auth0Provider
  domain="dev-j4eggzupeca50pwe.us.auth0.com"
    clientId="hSJSqkWASQdZvDEyaXO7xBScQiotLCZE"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: 'This is a unique Identifier',
      scope: "openid profile email"
    }}
    
  >
    <App />
    <LogoutButton/>
    <Profile/>
    
  </Auth0Provider>,
  document.getElementById("root")
);