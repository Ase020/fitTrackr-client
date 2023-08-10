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
            parameter="Date"
            paramValue={64}
          />

          <div className="recent_workout_container">
            <h5 className="recent_workout-header">top workouts</h5>

            {topWorkouts.length > 0 ? (
              topWorkouts.map((workout) => (
                <WorkoutCard
                  key={workout.id}
                  exerciseName={workout.exercise}
                  workoutName={workout.name}
                  date={workout.date}
                  progress={workout.percentage}
                />
              ))
            ) : (
              <p>no data</p>
            )}
          </div>
        </div>

        {/* Row 2 */}
        <div className="dashboard_bmi_user-container">
          <LineChartContainer
            data={bmiData}
            parameter="Date"
            paramValue={19.87}
          />

          <div className="recent_workout_container">
            <h5 className="recent_workout-header">recent workouts</h5>

            {recentWorkouts.length > 0 ? (
              recentWorkouts.map((workout) => (
                <WorkoutCard
                  key={workout.id}
                  exerciseName={workout.exercise}
                  workoutName={workout.name}
                  date={workout.date}
                  progress={workout.percentage}
                />
              ))
            ) : (
              <p>no data</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
