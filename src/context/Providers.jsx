import React from "react";
import { AuthProvider } from "./AuthContext";
import { ThemeProvider } from "./ThemeContext";
import { FavoriteProvider } from "./FavoritesContext";

const Providers = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <FavoriteProvider>
            <>{children}</>
          </FavoriteProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

export default Providers;
