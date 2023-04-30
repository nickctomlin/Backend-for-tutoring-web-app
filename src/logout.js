import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout,isAuthenticated  } = useAuth0();

  return (
    <div class="logout">
   { isAuthenticated && <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>}
    </div>
  );
};

export default LogoutButton;