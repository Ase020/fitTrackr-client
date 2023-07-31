import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <div className="dashboard_header-container">
        <h4 className="dashboard_header">My Dashboard</h4>
        <button className="dashboard_download-reports">Download Reports</button>
      </div>
      <div className="dashboard_report-section">reports section</div>
    </div>
  );
};

export default Dashboard;
