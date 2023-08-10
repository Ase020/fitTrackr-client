import { useContext } from "react";
import DownloadIcon from "@mui/icons-material/Download";

import "./dashboard.css";
import { LineChartContainer, WorkoutCard } from "../../components";
import { bmiData, weightData, waistData } from "../../constants";
import {
  convertWorkoutData,
  formatWaistData,
  recentWorkoutsFn,
  topWorkoutFn,
} from "../../utils";
import { WorkoutContext } from "../../context/workouts";

const Dashboard = () => {
  const [workouts] = useContext(WorkoutContext);

  const workoutData = convertWorkoutData(workouts);

  const topWorkouts = topWorkoutFn(workoutData);
  const recentWorkouts = recentWorkoutsFn(workoutData);

  const fitData = [
    {
      id: 6,
      user_id: 11,
      weight: 50,
      height: 140,
      waist_size: 36,
      created_at: "2023-08-09T21:15:41.526Z",
    },
    {
      id: 7,
      user_id: 11,
      weight: 51,
      height: 140,
      waist_size: 36,
      created_at: "2023-08-10T07:11:04.035Z",
    },
    {
      id: 8,
      user_id: 11,
      weight: 52,
      height: 141,
      waist_size: 36,
      created_at: "2023-08-10T07:15:16.488Z",
    },
    {
      id: 9,
      user_id: 11,
      weight: 50,
      height: 150,
      waist_size: 34,
      created_at: "2023-08-10T07:27:33.901Z",
    },
    {
      id: 10,
      user_id: 11,
      weight: 48,
      height: 150,
      waist_size: 34,
      created_at: "2023-08-10T07:29:42.946Z",
    },
    {
      id: 11,
      user_id: 11,
      weight: 46,
      height: 150,
      waist_size: 33,
      created_at: "2023-08-10T07:32:28.466Z",
    },
    {
      id: 12,
      user_id: 11,
      weight: 50,
      height: 142,
      waist_size: 35,
      created_at: "2023-08-10T07:35:47.040Z",
    },
    {
      id: 13,
      user_id: 11,
      weight: 46,
      height: 150,
      waist_size: 33,
      created_at: "2023-08-10T07:37:02.244Z",
    },
    {
      id: 14,
      user_id: 11,
      weight: 46,
      height: 150,
      waist_size: 33,
      created_at: "2023-08-10T07:44:41.334Z",
    },
  ];

  const trialData = formatWaistData(fitData);

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
            parameter="BMI"
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

        {/* Row 3 */}
        <div className="dashboard_bmi_user-container">
          <LineChartContainer
            data={trialData}
            parameter="Waist size"
            paramValue={36}
          />

          {/* <div className="recent_workout_container">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
