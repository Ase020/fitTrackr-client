/* eslint-disable react/prop-types */
import { ResponsiveLine } from "@nivo/line";

const LineChart = ({ data, parameter }) => {
  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: "whitesmoke",
            },
          },
          legend: {
            text: {
              fill: "whitesmoke",
            },
          },
          ticks: {
            line: {
              stroke: "whitesmoke",
              strokeWidth: 1,
            },
            text: {
              fill: "whitesmoke",
            },
          },
        },
        legends: {
          text: {
            fill: "whitesmoke",
          },
        },
        tooltip: {
          container: {
            color: "#3e4396",
          },
        },
      }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      colors={{ scheme: "nivo" }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: parameter,
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickValues: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend:
          (parameter === "Weight" && "Kgs") ||
          (parameter === "Waist size" && "Inches"),
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "top-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
