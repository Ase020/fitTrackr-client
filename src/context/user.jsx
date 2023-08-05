/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(
    JSON.parse(sessionStorage.getItem("user")) ? true : false
  );
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));

  const value = [user, setUser, isLoggedin, setIsLoggedin];

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
