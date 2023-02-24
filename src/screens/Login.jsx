import React, { useState } from "react";
import { Screen, SignInForm, SignUpForm } from "@components";

const Login = () => {
  const [newUser, setNewUser] = useState(false);

  const handleSwitchLogin = () => {
    setNewUser(!newUser);
  };

  return (
    <Screen>
      {!newUser ? (
        <SignInForm switchLogin={handleSwitchLogin} />
      ) : (
        <SignUpForm switchLogin={handleSwitchLogin} />
      )}
    </Screen>
  );
};

export default Login;
