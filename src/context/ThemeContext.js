import React, { useState, createContext } from "react";
import { theme, darkTheme } from "@utils";

export const ThemeContext = createContext({
  theme: {},
  switchTheme: () => {},
});

export const ThemeProvider = (props) => {
  const { children } = props;
  const [darkMode, setDarkMode] = useState(false);

  const switchTheme = () => {
    setDarkMode(!darkMode);
  };

  const valueContext = {
    theme: darkMode ? darkTheme : theme,
    switchTheme,
  };

  return (
    <ThemeContext.Provider value={valueContext}>
      <>{children}</>
    </ThemeContext.Provider>
  );
};
