import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

import "./workout.css";
import { columns, convertWorkoutData } from "../../utils";
import { WorkoutContext } from "../../context/workouts";

const Workout = () => {
  const [workouts] = useContext(WorkoutContext);

  const data = convertWorkoutData(workouts);

  return (
    <div className="workout_container">
      <div className="ex_text_wrapper margin-60">
        <h1 className="ex_title">Grind List</h1>
        <p className="ex_des">
          List of my workouts to help me perspertive and set clear goals
        </p>
      </div>
      <div className="workout_table-container">
        {workouts.length > 0 ? (
          <DataGrid rows={data} columns={columns} checkboxSelection />
        ) : (
          <div className="no_workout_container">
            <h2 className="no_workout-header">No workouts records</h2>
            <Link to="/exercises" className="no_workout-link">
              Add workout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workout;
