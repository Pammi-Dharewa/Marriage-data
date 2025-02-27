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
    <div className="w-auto h-[300px]"> {/* Ensures a responsive container */}
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        // yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Years",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Price",
          legendOffset: -50,
          legendPosition: "middle",
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
            { offset: 0, color: "inherit" },
            { offset: 100, color: "inherit", opacity: 0 },
          ]),
        ]}
        fill={[{ match: "*", id: "gradientA" }]}
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
