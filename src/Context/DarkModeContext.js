import { useContext, createContext, useState } from "react";
import React from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const value = {
    darkMode,
    setDarkMode,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeContext = () => useContext(DarkModeContext);
