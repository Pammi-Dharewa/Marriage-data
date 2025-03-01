import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";

const data = [
  {
    id: "Gold price",
    data: [
      { x: "2021", y: 10 },
      { x: "2022", y: 40 },
      { x: "2023", y: 25 },
      { x: "2024", y: 60 },
      { x: "2025", y: 30 },
    ],
  },
];

const LineGradient = () => {
  return (
    <div className="w-full h-[300px] bg-gray-900 rounded-lg shadow-xl p-4">
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "0",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Years",
          legendOffset: 40,
          legendPosition: "middle",
          tickTextColor: "#fff", // White axis labels
          legendTextColor: "#fff", // White legend text
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Price",
          legendOffset: -50,
          legendPosition: "middle",
          tickTextColor: "#fff", // White axis labels
          legendTextColor: "#fff", // White legend text
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        enableArea={true}
        curve="monotoneX"
        useMesh={true} // Improves hover interactivity
        defs={[
          linearGradientDef("gradientA", [
            { offset: 0, color: "hsl(47, 98%, 60%)" }, // Bright Yellow
            { offset: 50, color: "hsl(47, 98%, 50%)" }, // Deeper Gold
            { offset: 100, color: "hsl(47, 98%, 30%)", opacity: 0.5 }, // Soft Dark Gold
          ]),
        ]}
        fill={[{ match: "*", id: "gradientA" }]}
        theme={{
          background: "transparent", // Transparent background
          textColor: "#fff", // Global text color (labels, legends, etc.)
          axis: {
            ticks: {
              text: { fill: "#fff" }, // X and Y axis labels white
            },
            legend: {
              text: { fill: "#fff" }, // X and Y axis legend white
            },
          },
          grid: {
            line: {
              stroke: "hsl(0, 0%, 20%)", // Light gray grid lines
              strokeWidth: 1,
            },
          },
          legends: {
            text: { fill: "#fff" }, // Legends white
          },
        }}
        colors={["hsl(47, 98%, 60%)"]} // Gold color for the line
        lineWidth={2} // Thicker line
        enablePoints={true} // Show data points
        pointLabel="y"
        pointLabelYOffset={-12}
        areaOpacity={0.3} // Semi-transparent area
        enableSlices="x" // Show slice tooltip on hover
        sliceTooltip={({ slice }) => (
          <div className="bg-gray-800 p-3 rounded-lg shadow-lg">
            {slice.points.map((point) => (
              <div key={point.id} className="text-white">
                <strong>{point.data.x}</strong>: {point.data.y}
              </div>
            ))}
          </div>
        )}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            translateY: 0,
            itemsSpacing: 2,
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
    </div>
  );
};

export default LineGradient;