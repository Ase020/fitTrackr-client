import DownloadIcon from "@mui/icons-material/Download";

import "./dashboard.css";
import { LineChartContainer, WorkoutCard } from "../../components";
import { bmiData, weightData } from "../../constants";

const Dashboard = () => {
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
          <LineChartContainer data={weightData} />

          <div className="recent_workout_container">
            <h5 className="recent_workout-header">top workouts</h5>

            <WorkoutCard
              exerciseName="exercise a"
              workoutName="workout 1"
              date="21-07-2023"
              progress={120}
            />
            <WorkoutCard
              exerciseName="exercise k"
              workoutName="workout 6"
              date="03-08-2023"
              progress={116}
            />
            <WorkoutCard
              exerciseName="exercise b"
              workoutName="workout 90"
              date="06-06-2023"
              progress={108}
            />
            <WorkoutCard
              exerciseName="exercise p"
              workoutName="workout 3"
              date="12-05-2021"
              progress={102}
            />
            <WorkoutCard
              exerciseName="exercise x"
              workoutName="workout 8"
              date="15-09-2022"
              progress={100}
            />
            <WorkoutCard
              exerciseName="exercise z"
              workoutName="workout 36"
              date="15-09-2021"
              progress={98}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="dashboard_bmi_user-container">
          <LineChartContainer data={bmiData} />

          <div className="recent_workout_container">
            <h5 className="recent_workout-header">recent workouts</h5>

            <WorkoutCard
              exerciseName="exercise a"
              workoutName="workout 1"
              date="21-07-2023"
              progress={89}
            />
            <WorkoutCard
              exerciseName="exercise k"
              workoutName="workout 6"
              date="03-08-2023"
              progress={100}
            />
            <WorkoutCard
              exerciseName="exercise b"
              workoutName="workout 90"
              date="06-06-2023"
              progress={62}
            />
            <WorkoutCard
              exerciseName="exercise p"
              workoutName="workout 3"
              date="12-05-2021"
              progress={35}
            />
            <WorkoutCard
              exerciseName="exercise x"
              workoutName="workout 8"
              date="15-09-2022"
              progress={75}
            />
            <WorkoutCard
              exerciseName="exercise r"
              workoutName="workout 11"
              date="20-03-2020"
              progress={50}
            />
            <WorkoutCard
              exerciseName="exercise m"
              workoutName="workout 66"
              date="31-12-2022"
              progress={15}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
