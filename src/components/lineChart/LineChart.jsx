import { ResponsiveLine } from "@nivo/line";

import { lineData as data } from "../../constants";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const LineChart = () => (
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
      legend: "Date",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickValues: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Kgs",
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

export default LineChart;
