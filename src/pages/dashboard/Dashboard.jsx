import DownloadIcon from "@mui/icons-material/Download";

import "./dashboard.css";
import { LineChart } from "../../components";

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
          <div className="bmi_container">
            <div className="bmi_header-container">
              <h5 className="bmi_header">Body Weight</h5>
              <p className="bmi_body">65 kgs</p>
            </div>
            <div className="graph_box">
              <LineChart />
            </div>
          </div>

          <div className="recent_workout_container">
            <h5 className="recent_workout-header">recent workouts</h5>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
            <p>user overview data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
