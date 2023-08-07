import { DataGrid } from "@mui/x-data-grid";

import "./workout.css";
import { convertWorkoutData } from "../../utils";
import { useContext } from "react";
import { WorkoutContext } from "../../context/workouts";
import { mockDataWorkouts } from "../../constants";

const Workout = () => {
  const [workouts] = useContext(WorkoutContext);

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "exercise",
      headerName: "Exercise",
      flex: 1,
    },
    {
      field: "target",
      headerName: "Target",
      flex: 0.5,
    },
    {
      field: "achieved",
      headerName: "Achieved",
      flex: 0.5,
    },
    {
      field: "percentage",
      headerName: "Percentage",
      headerAlign: "left",
      align: "left",
      renderCell: (params) => <div>{params.row.percentage}%</div>,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

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
        {workouts ? (
          <DataGrid rows={data} columns={columns} checkboxSelection />
        ) : (
          <p>No workout data</p>
        )}
      </div>
    </div>
  );
};

export default Workout;
