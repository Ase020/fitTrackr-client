import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { ExercisesProvider } from "./context/exercise.jsx";
import { UserProvider } from "./context/user.jsx";
import { WorkoutProvider } from "./context/workouts.jsx";
import { FitnessesProvider } from "./context/fitnesses.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ExercisesProvider>
        <WorkoutProvider>
          <FitnessesProvider>
            <App />
          </FitnessesProvider>
        </WorkoutProvider>
      </ExercisesProvider>
    </UserProvider>
  </React.StrictMode>
);
