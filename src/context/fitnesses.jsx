/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./user";

export const FitnessesContext = createContext();

export const FitnessesProvider = ({ children }) => {
  const [user] = useContext(UserContext);
  const [fitnesses, setFitnesses] = useState([]);

  useEffect(() => {
    fetch(`https://fittrackr-8zow.onrender.com/users/${user?.id}/fitnesses`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to fetch fitnesses!");
        }
      })
      .then((data) => {
        setFitnesses(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [fitnesses.length]);

  const value = [fitnesses, setFitnesses];

  return (
    <FitnessesContext.Provider value={value}>
      {children}
    </FitnessesContext.Provider>
  );
};
