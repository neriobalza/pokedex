import React, { useState, createContext } from "react";
import theme from "@utils/theme";

export const ThemeContext = createContext({
  ...theme,
});

export const ThemeProvider = (props) => {
  const { children } = props;

  return (
    <ThemeContext.Provider value={theme}>
      <>{children}</>
    </ThemeContext.Provider>
  );
};
