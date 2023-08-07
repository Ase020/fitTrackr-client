/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./user";

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [user] = useContext(UserContext);

  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/users/${user?.id}/user_workouts`)
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  const value = [workouts, setWorkouts];

  return (
    <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>
  );
};
