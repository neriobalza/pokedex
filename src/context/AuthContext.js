import React, { useState, createContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@database";

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (cUser) => {
      setUser(cUser);
    });
  }, []);

  const valueContext = user;

  return (
    <AuthContext.Provider value={valueContext}>
      <>{children}</>
    </AuthContext.Provider>
  );
};
