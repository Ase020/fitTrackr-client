/* eslint-disable react/prop-types */
import LineChart from "../lineChart/LineChart";
import "./lineChartContainer.css";

const LineChartContainer = ({ data }) => {
  return (
    <div className="bmi_container">
      <div className="bmi_header-container">
        <h5 className="bmi_header">BMI</h5>
        <p className="bmi_body">20.04</p>
      </div>
      <div className="graph_box">
        <LineChart data={data} />
      </div>
    </div>
  );
};

export default LineChartContainer;
