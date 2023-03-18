import { useContext, createContext, useState } from "react";
import React from "react";

export const GeneralContext = createContext();

export const GeneralContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [lenguage, setLenguage] = useState('EN')

  const value = {
    darkMode,
    setDarkMode,
    lenguage,
    setLenguage
  };

  return (
    <GeneralContext.Provider value={value}>
      {props.children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => useContext(GeneralContext);
