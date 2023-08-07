import { useContext } from "react";
import DownloadIcon from "@mui/icons-material/Download";

import "./dashboard.css";
import { LineChartContainer, WorkoutCard } from "../../components";
import { bmiData, weightData } from "../../constants";
import {
  convertWorkoutData,
  recentWorkoutsFn,
  topWorkoutFn,
} from "../../utils";
import { WorkoutContext } from "../../context/workouts";

const Dashboard = () => {
  const [workouts] = useContext(WorkoutContext);

  const workoutData = convertWorkoutData(workouts);

  const topWorkouts = topWorkoutFn(workoutData);
  const recentWorkouts = recentWorkoutsFn(workoutData);

  console.log("Top: ", topWorkouts);
  return (
    <div className="dashboard_container">
      <div className="dashboard_header-container">
        <h4 className="dashboard_header">My Dashboard</h4>
        <button className="dashboard_download-reports">
          <DownloadIcon />
          <p className="dashboard_download-p">Download Reports</p>
        </button>
      </div>
      <div className="dashboard_report-section">
        {/* Row 1 */}
        <div className="dashboard_bmi_user-container">
          <LineChartContainer
            data={weightData}
            parameter="Weight"
            paramValue={64}
          />

          <div className="recent_workout_container">
            <h5 className="recent_workout-header">top workouts</h5>

            {topWorkouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                exerciseName={workout.exercise}
                workoutName={workout.name}
                date={workout.date}
                progress={workout.percentage}
              />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="dashboard_bmi_user-container">
          <LineChartContainer
            data={bmiData}
            parameter="BMI"
            paramValue={19.87}
          />

          <div className="recent_workout_container">
            <h5 className="recent_workout-header">recent workouts</h5>

            {recentWorkouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                exerciseName={workout.exercise}
                workoutName={workout.name}
                date={workout.date}
                progress={workout.percentage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
