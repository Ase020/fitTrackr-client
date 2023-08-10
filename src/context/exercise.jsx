/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ExercisesContext = createContext();

export const ExercisesProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fittrackr-8zow.onrender.com/exercises")
      .then((res) => res.json())
      .then((data) => {
        setExercises(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const value = { exercises, setExercises, isLoading, setIsLoading };

  return (
    <ExercisesContext.Provider value={value}>
      {children}
    </ExercisesContext.Provider>
  );
};
