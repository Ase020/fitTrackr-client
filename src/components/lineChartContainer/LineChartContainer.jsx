import LineChart from "../lineChart/LineChart";
import "./lineChartContainer.css";

const LineChartContainer = () => {
  return (
    <div className="bmi_container">
      <div className="bmi_header-container">
        <h5 className="bmi_header">Body Weight</h5>
        <p className="bmi_body">65 kgs</p>
      </div>
      <div className="graph_box">
        <LineChart />
      </div>
    </div>
  );
};

export default LineChartContainer;
