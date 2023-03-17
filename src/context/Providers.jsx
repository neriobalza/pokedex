import React from "react";
import { AuthProvider } from "./AuthContext";
import { ThemeProvider } from "./ThemeContext";

const Providers = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <>{children}</>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

export default Providers;
