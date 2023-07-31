/* eslint-disable react/prop-types */
import LineChart from "../lineChart/LineChart";
import "./lineChartContainer.css";

const LineChartContainer = ({ data, parameter, paramValue }) => {
  return (
    <div className="bmi_container">
      <div className="bmi_header-container">
        <h5 className="bmi_header">{parameter}</h5>
        <p className="bmi_body">
          {paramValue}
          {parameter === "Weight" && "kgs"}
        </p>
      </div>
      <div className="graph_box">
        <LineChart data={data} parameter={parameter} />
      </div>
    </div>
  );
};

export default LineChartContainer;
